import React from 'react';
import styles from './canvas.module.css';

export default class Canvas extends React.Component {
    render() {
        return (
            <div className={styles.canvas_wrapper}>
                <div className={styles.canvas_point}></div>
            </div>
        )
    }
}