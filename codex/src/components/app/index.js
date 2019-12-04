import React, {useState} from 'react';
import Canvas from '../canvas';
import {Button} from 'antd';
import styles from './app.module.css';
import InputComponent from '../input';
import ComandListComponent from '../ComandList';
import getCommand from '../../helpers/getCommand';


function App () {
    const [inputValue, setInputValue] = useState('');  
    const [canvasValue, setCanvasValue] = useState('');
  
    const enterCommand = () => {
        const value = getCommand(inputValue);
        setCanvasValue(value)
        setInputValue('')
    }
    
        return (
            <div className={styles.page_wrapper}>
                <ComandListComponent/>
                <div className={styles.canvas_field}>
                    <div className={styles.input_block}>
                        <InputComponent
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                        />
                        <Button onClick={enterCommand}> Enter </Button>
                    </div>
                    <Canvas
                        canvasValue={canvasValue}
                    />
                </div>
            </div>
        )
}
export default App;