import React, {ChangeEvent} from 'react';
import './App.css';


type SettingsProps = {
    onChangeStart: (newValue: number) => void
    onChangeMax: (newValue: number) => void
    start: number
    max: number
    disableButtonSet: boolean
    setSettings: () => void
}

function Settings(props: SettingsProps) {

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStart(parseInt(e.currentTarget.value))
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMax(parseInt(e.currentTarget.value))
    }

    return (
        <div className='container'>
            <div>start
                <input type="number"
                       onChange={changeStartValue}
                       value={props.start}/></div>
            <div> max
                <input type="number"
                       onChange={changeMaxValue}
                       value={props.max}/></div>
            <div>
                <button disabled={props.disableButtonSet} onClick={props.setSettings}>set</button>
            </div>
        </div>
    );
}

export default Settings;
