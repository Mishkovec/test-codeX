import React from 'react';
import Canvas from '../canvas';
import styles from './app.module.css';

export default class App extends React.Component {
    render() {
        return (
            <div className={styles.page_wrapper}>
                <Canvas/>
            </div>
        )
    }
}