const redux = require("redux");

const initialState = {
    counter: 10
}

const counterReducer = (state = initialState, action) => {
    if(action.type === "INC") {
        return { counter: state.counter + 1 }
    }
    if(action.type === "DEC"){
        return {counter: state.counter - 1}
    }

    return state;
};

const store = redux.createStore(counterReducer);

const counterSubsriber = () => {

   const latestState = store.getState()
   console.log(latestState);
}

store.subscribe(counterSubsriber)

store.dispatch({type: 'INC'});
store.dispatch({type: 'DEC'});