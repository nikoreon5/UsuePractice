import React from 'react';
import classes from './DefInput.module.css'
const DefInput = (props) => {
    return (
        <input {...props} className={classes.myInput}/>
    );
};

export default DefInput;