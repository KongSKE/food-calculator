import { TFoodSet, TFoodSetName } from "../data/food-menu";

export type TFoodItem = TFoodSet & {
  amount: number
}

export type TFoodBill = {
  memberCardId?: string,
  foodItems: TFoodItem[]
}

export class Calculator {
  calculateBill(payload: TFoodBill): number {
    const { memberCardId, foodItems } = payload
    const totalPrice = 0

    let finalTotalPrice = foodItems.reduce((sumPrice, foodItem) => {
      const { name, price, amount } = foodItem

      if (price < 0 || amount < 0) throw new Error('price value cannot less than 0')

      if (this.checkPromotionDuoSet(name)) {
        const remainingAmount = amount % 2

        // Get only food item that match condition (only pair same menu item)
        const foodItemInPromotionAmount = amount - remainingAmount

        const promotionTotalPrice = (foodItemInPromotionAmount * price) * 0.95
        const remainingTotalPrice = remainingAmount * price

        return sumPrice + remainingTotalPrice + promotionTotalPrice
      } else {
        return sumPrice + (price * amount)
      }
    }, totalPrice)

    // check member card
    if (memberCardId) {
      finalTotalPrice = finalTotalPrice * 0.9
    }

    return finalTotalPrice
  }

  checkPromotionDuoSet(foodName: TFoodSetName): boolean {
    // check promotion food set
    const foodCampaignDoubleSet: TFoodSetName[] = ['Orange', 'Pink', 'Green']
    return foodCampaignDoubleSet.includes(foodName)
  }
}

export default new Calculator
