import { ADD_ADDRESS, ADD_TO_CART, CHANGED_QUANTITY, CHANGE_ORDER_CART, EMPTY_CART, INIT_PRODUCTS, PLACE_ORDER, REMOVE_ITEM, SET_SHIP_ADDRESS } from "../action";

// initial product
const initialStateProduct = {
    products: []
}
// initial cart
const initialStateCart = {
    items: []
}
// Initial order
const initialStateOrder = {
    items: [],
    shipping_charge: 50,
    discount_in_percent: 10,
    shipping_address: '',
    total_items: 0,
    total_cost: 0
}
// Initial user
const initialStateUser = {
    name: 'Nitish',
    email: 'nitish@gmail.com',
    address: [
        {
            first_name: 'Nitish',
            last_name: 'Preeti',
            address1: '123',
            address2: 'New delhi',
            country: 'India',
            state: 'Delhi',
            phone: '9823544543',
            pin_code: 110096
        },
        {
            first_name: 'Shippu',
            last_name: 'King',
            address1: '245',
            address2: 'New Ashok',
            country: 'India',
            state: 'Delhi',
            phone: '9823544543',
            pin_code: 110098
        },
    ],
    orders: []

}

//   product reducer
const productReducer = (state = initialStateProduct, action) => {
    switch(action.type){
        case INIT_PRODUCTS:
        return{...state,products:action.payload}
        default:
        return state;
    }
}

//   Cart reducer
const cartReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            
            return {...state, items:action.payload.items}

        case CHANGED_QUANTITY:
            const oldItem = state.items.find((item) => item._id === action.payload._id)
            let index = state.items.indexOf(oldItem)
            const newItems = [...state.items]
            newItems[index] = action.payload
            return { ...state, items: newItems }
            case EMPTY_CART:
                return {...state,items:[]}
                case REMOVE_ITEM:
            const item = action.payload;
            const i =  state.items.findIndex(it=>it._id===item._id)
            const itemsArray = [...state.items]
            itemsArray.splice(i,1)
            return {...state,items:itemsArray}
        default:
            return state;
    }
}

const OrderReducer = (state = initialStateOrder, action) => {
    switch (action.type) {
        case CHANGE_ORDER_CART:
            const items = action.payload;
            const total_items = items.reduce((total, item) => total + (item.quantity * 1), 0)
            const total_cost = items.reduce((total, item) => total + item.price * item.quantity, 0)
            return { ...state, items: action.payload, total_items, total_cost }
            case SET_SHIP_ADDRESS:
                return {...state,shipping_address:action.payload}
        default:
            return state;
    }
}

const userReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return { ...state, address: [...state.address, action.payload] }
            case PLACE_ORDER:
            return { ...state, orders: [...state.orders, action.payload] }

        default:
            return state;
    }
}


export { productReducer, cartReducer, OrderReducer, userReducer }