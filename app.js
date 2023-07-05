// import { createStore } from "https://cdn.skypack.dev/redux";
import { createStore } from "./redux/core.js";

// Reducer
function counterReducer(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

// Actions
function increaseAction(payload) {
    return {
        type: "INCREMENT",
        payload,
    };
}

function decreaseAction(payload) {
    return {
        type: "DECREMENT",
        payload,
    };
}

// Config store
const store = createStore(counterReducer);

// Render UI
store.subscribe(() => {
    renderUI();
});

function renderUI() {
    const value = document.getElementById("count-value");

    value.innerHTML = store.getState();
}

// Event handler
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.onclick = function () {
    store.dispatch(increaseAction(1));
};

decreaseBtn.onclick = function () {
    store.dispatch(decreaseAction(1));
};

renderUI();
