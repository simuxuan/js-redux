import * as actionTypes from './constant'
// 初始化的数据
const initialState = {
    counter: 200
}
// 1. 初始化时若无初始值--- state：undefined ，action：'@@redux/INIT4.z.d.i.1.1'
// 2. dispatch时 ---- state:之前的状态,action:对应action
function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        case actionTypes.SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        default:
            return state
    }
}

export default reducer


