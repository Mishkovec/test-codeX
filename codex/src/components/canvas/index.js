import React from 'react';
import styles from './canvas.module.css';


let createField = () => {    
    let children = [];
        for (let i = 0; i < 1024; i++) {
            children.push(React.createElement('div', null, null));
        }
    return children;
}


export default class Canvas extends React.Component {    
    render() {
        return (
            <div 
                className={styles.canvas_wrapper}
                onClick={(e)=>{e.target.style.background = 'black'}}
            > 
                {createField()}               
            </div>
        )
    }
}