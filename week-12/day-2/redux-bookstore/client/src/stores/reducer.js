import * as actionTypes from './actions/actionTypes'


const initialState = {
    cart: [],
    isAuthenticated: false 
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.onAddToCart:
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        case actionTypes.LOGIN:
            return {
                ...state, 
                isAuthenticated: true 
            }
        case actionTypes.LOGOUT:
            return {
                ...state, 
                isAuthenticated: false 
            }
        default: 
            return state 
    }
}


export default reducer