
import * as toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer} = toolkit;

const addToCart = createAction("ADD_TO_CART"); 

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        // state.cart = [...state.cart, action.payload],
        state.push(action.payload);
    });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer,
    },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
})

const action1 = addToCart({id: 10, qty: 5});
store.dispatch(action1);
store.dispatch(addToCart({id: 15, qty: 5}));
store.dispatch(addToCart({id: 16, qty: 3}));

store.dispatch(login());