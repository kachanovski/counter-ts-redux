import React, {useState} from 'react';
import './App.css';
import Settings from "./Settings";
import Counter from "./Counter";

function App() {

    let [count, setCount] = useState()
    let [start, setStart] = useState<number>(0)
    let [max, setMax] = useState<number>(0)
    let [disableButtonSet, setDisableButtonSet] = useState<boolean>(true)
    let [disableButtonCount, setDisableButtonCount] = useState<boolean>(false)
    let [disableButtonReset, setDisableButtonReset] = useState<boolean>(false)
    let [incorrectValue, setIncorrectValue] = useState<boolean>(false)
    let [valueChanged, setValueChanged] = useState<boolean>(true)


    const inCorrectValue = () => {
        setIncorrectValue(true)
        setDisableButtonSet(true)
    }
    const correctValue = () => {
        setIncorrectValue(true)
        setDisableButtonSet(true)
    }

    function nextCount() {
        if (count < max)
            setCount(count + 1)
        setDisableButtonReset(false)
        if (count === max - 1)
            setDisableButtonCount(true)
    }

    function resetCount() {
        setCount(start)
        setDisableButtonCount(false)
        setDisableButtonReset(true)

    }

    function onChangeStart(newValue: number) {
        let newStartValue = newValue
        setStart(newStartValue)
        if (newStartValue < 0 || max <= newStartValue) {
            setIncorrectValue(true)
            setDisableButtonSet(true)
        } else {
            setIncorrectValue(true)
            setDisableButtonSet(true)
        }
        setValueChanged(true)

    }

    function onChangeMax(newValue: number) {
        let newMaxValue = newValue
        setMax(newMaxValue)
        if (newMaxValue <= 0 || start >= newMaxValue) {
            setIncorrectValue(true)
            setDisableButtonSet(true)
        } else {
            setIncorrectValue(true)
            setDisableButtonSet(true)
        }
        setValueChanged(true)
    }

    function setSettings() {
        setCount(start)
        setValueChanged(false)
        setDisableButtonSet(true)
        setDisableButtonCount(false)
        setDisableButtonReset(true)
    }

    let text = incorrectValue
        ? <div className="error">Incorrect value</div>
        : <div className="changedValue">Please, change value and press "SET"</div>

    return (

        <div className="App">

            <Settings onChangeStart={onChangeStart}
                      max={max}
                      setSettings={setSettings}
                      onChangeMax={onChangeMax}
                      disableButtonSet={disableButtonSet}
                      start={start}/>
            <Counter text={text}
                     valueChanged={valueChanged}
                     count={count}
                     disableButtonCount={disableButtonCount}
                     nextCount={nextCount}
                     disableButtonReset={disableButtonReset}
                     resetCount={resetCount}
            />

        </div>
    );
}

export default App;
