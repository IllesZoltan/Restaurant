const initialState = {
  dishes:[{
    dishName: "Gyros Pita",
    imgPath: "https://png.pngtree.com/element_our/sm/20180515/sm_f7b6c861bd80a6dfd15d04c4919ff73e.jpg",
    ingredients: ['habi1', 'habi2', 'habi3', 'habi4',],
    price: 450
},
{
  dishName: "Pizza",
  imgPath: "https://png.pngtree.com/element_our/sm/20180515/sm_f7b6c861bd80a6dfd15d04c4919ff73e.jpg",
  ingredients: ['LISZTJAVITOSZER', 'VIZ',],
  price: 250
},
{
  dishName: "Espresso",
  imgPath: "https://png.pngtree.com/element_our/sm/20180515/sm_f7b6c861bd80a6dfd15d04c4919ff73e.jpg",
  ingredients: ['habi1', 'habi2', 'habi3', 'habi4',],
  price: 200
}],
tables:[{
  name: 'Ablak melletti',
  orders:[],
  times: [],
  totalPrice: 0
},
{
  name: 'Lepcso melletti',
  orders:[],
  times: [],
  totalPrice: 0
}],
finishedOrders: []

}

export default function(state = initialState, action){
  switch (action.type) {
    case 'add': {
      const otherState = {...state}
      otherState.tables[action.payload.selectedTable].orders = [...otherState.tables[action.payload.selectedTable].orders, action.payload.dishesAdded]
      otherState.tables[action.payload.selectedTable].totalPrice += action.payload.totalPrice
      otherState.tables[action.payload.selectedTable].times = [...otherState.tables[action.payload.selectedTable].times, action.payload.startTime]
      return otherState
    }

      
    case 'finish': {
      const otherState = {...state};
      otherState.tables = [...otherState.tables];
      otherState.tables[action.payload.index].orders = [];
      otherState.tables[action.payload.index].totalPrice = 0;
      otherState.finishedOrders.push({...action.payload})
      return otherState
    }


    default: return state
  }
    
  }