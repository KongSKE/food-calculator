import { foodSetMenus } from "./data/food-menu"
import Calculator from "./services/calculator"

export function main() {
  const result = Calculator.calculateBill({
    memberCardId: '1',
    foodItems: [
      {
        name: 'Blue',
        amount: 4,
        price: 30
      }
    ]
  })
}

main()
