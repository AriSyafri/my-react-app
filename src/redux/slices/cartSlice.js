import { createAction, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find(
                (item) => item.id === action.payload.id
            );
            
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push(action.payload);
            }  
        },

        deleteToCart: (state, action ) => {
            const itemInCart = state.data.find(
                (item) => item.id === action.payload.id
            );

            if (itemInCart) {
                if (itemInCart.qty > 1) {
                    itemInCart.qty--;
                } else {
                    state.data.splice(itemInCart, 1);
                }
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export const { deleteToCart } = cartSlice.actions;
export default cartSlice.reducer;