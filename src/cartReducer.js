const CartReducer = ((state, action) => {
    switch(action.type){
        case 'ADD' : {
            return [action.payload, ...state]
        }
        case 'DELETE' : 
            return state.filter(tran => tran.key !== action.payload)
        default:
            return state;
    }
})

export default CartReducer;