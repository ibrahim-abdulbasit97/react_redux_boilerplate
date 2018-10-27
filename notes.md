redux setup

1- you install redux and react-redux

# yarn add redux react-redux

2- then you create your store in index file using createStore function and pass a reducer function to it

2- when you need multiable reducers for yor applicatioon you just use combineReducers ! you mport it from the redux too
-- you pass reducers to it as objects

3- if you want to provde the state to your app youo need to wrap it in a provider from react-redux

! you better creact a seprate folder fo your reducers, and a seprate folder for your actions to
4 - to connect your components you use connect from react-redux
4 - to use your actions inside your components you use mapActionsToProps

<!-- USING THUNK MIDDLEWEARE -->

you need to install the lib frist # yarn add redux-thunk
its simply an action that's return a function thats return a function thats take dispatch as an aregement