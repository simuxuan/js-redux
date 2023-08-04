import React, { memo } from 'react'
import { increment, deincrement } from '../../store/counter'
import { connect } from "react-redux"


const Count = memo((props) => {
    const { counter ,increment} = props
    return (
        <div>
            <div>
                {counter}
            </div>
            <button onClick={()=> increment(1)}>click</button>
        </div>
    )
})

const mapStateToProsps = (state) => ({
    counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
    increment(num) {
        dispatch(increment(num))
    },
    decrement: (num) => dispatch(deincrement(num))
})

export default connect(mapStateToProsps, mapDispatchToProps)(Count)