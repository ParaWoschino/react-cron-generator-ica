import React, {FunctionComponent} from 'react';

interface MinutesCronProp {
    onChange(e: string[]): void
    value: string[]
    translate(e: string): string
}

const MinutesCron: FunctionComponent<MinutesCronProp> = (props) => {
    const onChange = (e: {target: { value: string}}) => {
        if((parseInt(e.target.value) > 0 && parseInt(e.target.value) < 60) || e.target.value === '') {
            let val = ['0','*','*','*','*','?','*']
            val[1] = e.target.value ? `0/${e.target.value}` : val[1];  
            props.onChange(val)
        }     
    }

    const value = props.value[1].split('/')[1];
    return (<div className="well">   
            {props.translate('Every')} <input type="Number" onChange={onChange} value={value} min={1} max={60} /> {props.translate('minute(s)')}
    </div>)
}
export default MinutesCron;