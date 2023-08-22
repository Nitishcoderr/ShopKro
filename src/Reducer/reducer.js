import { ADD_ADDRESS, ADD_TO_CART, CHANGED_QUANTITY, CHANGE_ORDER_CART, EMPTY_CART, PLACE_ORDER, SET_SHIP_ADDRESS } from "../action";

// initial product
const initialStateProduct = {
    products: [
        {
            id: 1,
            name: 'Sony WX-5',
            price: 100.75,
            category: 'Headphone',
            rating: 3,
            color: 'red',
            size: 'S',
            details: {
                product: '',
                warrenty: '',
                merchant: ''
            },
            image: 'product-1-square',
            img: ['image-1-square', 'image-1-square', 'image-1-square']
        },
        {
            id: 2,
            name: 'Apple Watch 2',
            price: 500.75,
            category: 'SmartWatch',
            rating: 4,
            color: 'black',
            size: 'M',
            details: {
                product: '',
                warrenty: '',
                merchant: ''
            },
            image: 'product-2-square',
            img: ['image-2-square', 'image-2-square', 'image-2-square']
        },
        {
            id: 3,
            name: 'Apple iPhone 11',
            price: 700.75,
            category: 'Mobile',
            rating: 4,
            color: 'black',
            size: '',
            details: {
                product: '',
                warrenty: '',
                merchant: ''
            },
            image: 'product-3-square',
            img: ['image-3-square', 'image-3-square', 'image-3-square']
        },
    ]
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
    return state;
}

//   Cart reducer
const cartReducer = (state = initialStateCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.items.find((item) => item.id === action.payload.id)) {
                return state;
            }
            return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] }

        case CHANGED_QUANTITY:
            const oldItem = state.items.find((item) => item.id === action.payload.id)
            let index = state.items.indexOf(oldItem)
            const newItems = [...state.items]
            newItems[index] = action.payload
            return { ...state, items: newItems }
            case EMPTY_CART:
                return {...state,items:[]}

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