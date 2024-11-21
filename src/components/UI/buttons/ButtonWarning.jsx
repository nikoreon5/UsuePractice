import React from 'react';
import classes from './ButtonWarning.module.css'
const ButtonWarning = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btnWarning}>
            {children}
        </button>
    );
};

export default ButtonWarning;