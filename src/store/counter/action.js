import * as actionTypes from './constant'


export const increment = (num) => ({
    type: actionTypes.ADD_NUMBER,
    num
})

export const deincrement = (num) => ({
    type: actionTypes.SUB_NUMBER,
    num
})
