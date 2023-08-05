import { HANDLE_PRODUCT_DETAIL, HANDLE_CART, HANDLE_QUANTITY, DELETE_PRODUCT } from './actionType'

const initialState = {
    productDetail: {
        "id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 995,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
    carts: []
}

export const btShoeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_PRODUCT_DETAIL: {
            const newProDetail = { ...action.payload }
            return { ...state, productDetail: newProDetail }
        }
        case HANDLE_CART: {
            const newCarts = [...state.carts]
            const index = newCarts.findIndex((cart) => cart.id === action.payload.id)
            if (index !== -1) {
                newCarts[index].cartQuantity += 1;
            } else {
                newCarts.push({...action.payload, cartQuantity: 1})
            }
            return {...state, carts: newCarts}
        }
        case HANDLE_QUANTITY: {
            const newCarts = state.carts.map((cart) => {
                if (cart.id === action.payload.id) {
                    return {
                        ...cart,
                        cartQuantity: cart.cartQuantity = cart.cartQuantity + action.payload.quantity || 1,
                    }
                }
                return cart
            })
            return {...state, carts: newCarts}
        }
        case DELETE_PRODUCT: {
            const newCart = state.carts.filter((cart) => cart.id !== action.payload)
            return {...state, carts: newCart}
        }
        default:
            return state
    }
}