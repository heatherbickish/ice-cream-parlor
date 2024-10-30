console.log('yum')



const iceCream = [
  {
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0,
    type: 'scoop'

  },
  {
    name: 'Vanilla',
    price: 1,
    quantity: 0,
    type: 'scoop'

  },
  {
    name: 'Strawberry',
    price: 1.25,
    quantity: 0,
    type: 'scoop'

  },
  {
    name: 'Sprinkles',
    price: 0.25,
    quantity: 0,
    type: 'topping'

  },
  {
    name: 'Chocolate Chips',
    price: 0.25,
    quantity: 0,
    type: 'topping'

  },
  {
    name: 'Cookie Chunks',
    price: 0.50,
    quantity: 0,
    type: 'topping'

  }
]

let cardElem = document.getElementById('cart')
let totalElem = document.getElementById('total')

let total = 0

function orderVanilla() {
  let vanilla = iceCream[1]
  vanilla.quantity++
  console.log('vanilla', vanilla)
}

function orderCookieDough() {
  let selectedItem = iceCream[0]
  selectedItem.price++
  console.log('selected item', selectedItem)
}

function orderItem(flavor) {
  console.log(flavor)
  for (let i = 0; i < iceCream.length; i++) {
    console.log(iceCream[1].name)
    if (iceCream[i].name === flavor) {
      total += iceCream[i].price
      console.log(total, flavor, iceCream[i].name)
      cardElem.innerText = `${iceCream[i].name}`
      totalElem.innerText = `$${total.toFixed(2)}`

    }
  }
}




