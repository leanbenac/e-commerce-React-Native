import {  createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/products";


const initialState = {
    value:{
        cart: []
    }
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    //acciones posibles
    reducers:{
        addItem: (state, action) => {
            // console.log(state.value.products);
            const productoRepetido = state.value.cart.find(producto => producto.id === action.payload.id)
            console.log(productoRepetido);
            if (productoRepetido) {
                state.value.cart.map(item => {
                    if (item.id === action.payload.id) item.quantity++
                    return item
                })

            }
            else {
                const producto = PRODUCTS.find(producto => producto.id === action.payload.id);
                state.value.cart.push({ ...producto, quantity: 1 })
            }
        },
        removeItem:() => {},
        confirmPurchase: () => {},
    }
})

export const {addItem, removeItem, confirmPurchase} = cartSlice.actions

export default cartSlice.reducer