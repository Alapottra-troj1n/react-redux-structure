import { actionTypes } from "../actionTypes/actionTypes"

export const addToCart = (product) => {
    return{
        type: actionTypes.ADD_TO_CART,
        payload: product
    };
};

export const removeFromCart = (id) => {
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    };
};