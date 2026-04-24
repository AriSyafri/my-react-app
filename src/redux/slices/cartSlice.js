import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: JSON.parse(localStorage.getItem("cart")) || [],
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
            const index = state.data.findIndex(
                (item) => item.id === action.payload.id
            );

            if (index !== -1) {
                if (state.data[index].qty > 1) {
                    state.data[index].qty--;
                } else {
                    state.data.splice(index, 1);
                }
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export const { deleteToCart } = cartSlice.actions;
export default cartSlice.reducer;