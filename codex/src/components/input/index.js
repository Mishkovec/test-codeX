import { Input } from 'antd';
import React from 'react';
import styles from './input.module.css';

function InputComponent ({ inputValue, setInputValue}) {  
        return (
            <div className={styles.input_wrapper}>
                <Input 
                    placeholder={'enter your command'} 
                    value={inputValue} 
                    onChange={(e)=>setInputValue(e.target.value)}
                />
            </div> 
        )
}
export default InputComponent;