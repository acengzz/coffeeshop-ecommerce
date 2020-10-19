# SETUP

# npm install

- redux -> general redux library
- react-redux -> for the hooks that we need
- redux-thunk -> in actions, with redux-thunk, making async requests way easier
- redux-devtools-extension -> chrome extension for making control of redux easy

# Step - 1 -> Store Setup

- import createStore , combineReducers , applyMiddleware
- import thunk
- import composeWithDevTools

1. Create a reducer that combines all reducers from different files.
2. Create an empty initialState for future use.
3. Define a middleware array that holds "thunk" as a node.
4. Create store. Store takes 3 parameters.
   1. reducer,
   2. initialState,
   3. middlewares (composeWithDevTools(applyMiddleware(...middleware)))
   - This will be a store that holds 2 middlewares, multiple reducers and one initialState.

# Step - 2 -> Create Reducers & Actions
