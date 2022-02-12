import React from 'react';
import { Spinner } from 'react-bootstrap';

import styles from './Loader.module.css';

function Loader({ animation }) {
    const spinnerAnimation = !animation ? 'border' : animation;

    return (
        <Spinner className={styles.loader} animation={spinnerAnimation} />
    )
}

export default Loader
