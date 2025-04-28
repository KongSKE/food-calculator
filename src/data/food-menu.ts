export type TFoodSet = {
  name: TFoodSetName,
  price: number,
}

export type TFoodSetName = 'Red' | 'Green' | 'Blue' | 'Yellow' | 'Pink' | 'Purple' | 'Orange'

export const foodSetMenus: TFoodSet[] = [
  {
    // id: 1,
    name: 'Red',
    price: 50
  },
  {
    // id: 2,
    name: 'Green',
    price: 40
  }, {
    // id: 3,
    name: 'Blue',
    price: 30
  },
  {
    // id: 4,
    name: 'Yellow',
    price: 50
  },
  {
    // id: 5,
    name: 'Pink',
    price: 80
  },
  {
    // id: 6,
    name: 'Purple',
    price: 90
  },
  {
    // id: 7,
    name: 'Orange',
    price: 120
  }
]