import React from 'react';
import styles from './canvas.module.css';
import { Input } from 'antd';

const { TextArea } = Input;

function Canvas (props) {   
        return (            
            <TextArea rows={22} 
                value={props.canvasValue}                
            />
        )
}
export default Canvas;