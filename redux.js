// reducer

import { legacy_createStore } from "redux";

const cartReducer = (
    state = {
        cart: [{
            id: 1,
            qty: 30
        }],
    }, 
    action
)  => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default: return state;
    }
};

// store -> wadah state
const store = legacy_createStore(cartReducer);
console.log("oncreate store: ", store.getState());


// subscribe -> memeriksa perubahan di store (ini terakhir dijalankan biasanya)
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
})

// dispatch
const action1 = {type: "ADD_TO_CART", payload: { id: 2, qty: 50 }};
const action2 = {type: "ADD_TO_CART", payload: { id: 3, qty: 5 }};
store.dispatch(action1);
store.dispatch(action2);

// jalankan pake node redux
