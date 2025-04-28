import * as chai from 'chai';

import Calculator, { TFoodBill } from '../../src/services/calculator';
import { mockFoodItemsRedAndGreenSet, mockFoodItemsWithPromotion } from '../mocks/food-data';

chai.should();
const should = chai.Should()

describe('expect success', () => {
  it('should calculate total number correctly - without discount', () => {
    const payload: TFoodBill = {
      foodItems: mockFoodItemsRedAndGreenSet
    }

    const result = Calculator.calculateBill(payload);

    result.should.equals(90)
  });

  it('should return correct price with 10% discount if have membership', () => {
    const payload: TFoodBill = {
      memberCardId: 'somchai',
      foodItems: mockFoodItemsRedAndGreenSet
    }

    const totalPrice = mockFoodItemsRedAndGreenSet.reduce((total, foodItem) => total + (foodItem.price * foodItem.amount), 0)
    const expected = totalPrice * 0.9

    const result = Calculator.calculateBill(payload);

    result.should.equals(expected)
  })

  it('should return correct price with duo promotion same menu with 5% discount', () => {
    const payload: TFoodBill = {
      foodItems: mockFoodItemsWithPromotion
    }

    const expected = (120 * 4 * 0.95) + (120)

    const result = Calculator.calculateBill(payload);

    result.should.equals(expected)
  })

  it('should return correct price with duo promotion same menu with 5% discount and membership 10%', () => {
    const payload: TFoodBill = {
      memberCardId: 'somchai',
      foodItems: mockFoodItemsWithPromotion
    }

    const expected = (((120 * 4 * 0.95) + 120) * 0.9)

    const result = Calculator.calculateBill(payload);

    result.should.equals(expected)
  })
});

describe('expect fail', () => {
  it('should return error if insert invalid price', () => {
    try {
      const payload: TFoodBill = {
        foodItems: [
          { name: 'Blue', price: -10, amount: 1 }
        ]
      }

      const result = Calculator.calculateBill(payload);
    } catch (error) {
      should.exist(error)
    }
  })
})