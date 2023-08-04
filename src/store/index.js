import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import countReducer from "./counter";
import homeReducer from "./home"

const reducer = combineReducers({
  counter: countReducer,
  home: homeReducer,
});

// redux-devtools
// const composeEnhancers =  compose; // 生产这样赋值来关闭 工具
// {trace: true}  开启追踪代码调用栈
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
