import React from 'react';
import classes from './ButtonSuccess.module.css'
const ButtonSuccess = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btnSuccess}>
            {children}
        </button>
    );
};

export default ButtonSuccess;