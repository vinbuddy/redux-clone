export const createStore = (reducer = () => {}) => {
    let state = reducer(undefined, {});
    const subscribes = [];

    return {
        getState() {
            return state;
        },
        dispatch(action = {}) {
            state = reducer(state, action);

            subscribes.forEach((subscriber) => subscriber());
        },
        subscribe(subscriber) {
            subscribes.push(subscriber);
        },
    };
};
