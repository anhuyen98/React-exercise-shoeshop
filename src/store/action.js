import { HANDLE_PRODUCT_DETAIL, HANDLE_CART, HANDLE_QUANTITY, DELETE_PRODUCT } from './actionType'

export const btShoeAction = {
    handleProductDetail(payload) {
        return {
            type: HANDLE_PRODUCT_DETAIL,
            payload,
        }
    },
    handleCart(payload) {
        return {
            type: HANDLE_CART,
            payload,
        }
    },
    handleQuantity(payload) {
        return {
            type: HANDLE_QUANTITY,
            payload,
        }
    },
    deleteProduct(payload) {
        return {
            type: DELETE_PRODUCT,
            payload,
        }
    }
}