import React, {createContext, useReducer} from 'react'
import CartReducer from './cartReducer'


export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    let [state, dispatch] = useReducer(CartReducer, []);
    function addCart(cartObj){
        dispatch({type: 'ADD', payload: cartObj})
    }
    function deleteCart(key){
        dispatch({type: 'DELETE', payload: key});
    }

    return (
        <CartContext.Provider value={{cart: state, deleteCart, addCart}} >
            {children}
        </CartContext.Provider>
    )
}
