import React from 'react';
import './App.css';

type PropsCount = {
    valueChanged: boolean
    text:any
    count: number
    disableButtonCount:boolean
    disableButtonReset:boolean
    nextCount: () => void
    resetCount: () => void

}

function Counter(props: PropsCount) {

    return (
        <div className='container'>
            {
                props.valueChanged
                    ? props.text
                    : <div>
                        <div>
                            <input type='number' value={props.count}/>
                        </div>

                        <div>
                            <button disabled={props.disableButtonCount} onClick={props.nextCount}>+</button>

                            <button disabled={props.disableButtonReset} onClick={props.resetCount}>reset</button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Counter;
