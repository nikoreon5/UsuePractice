import React from 'react';
import classes from './ButtonPrimary.module.css'
const ButtonPrimary = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btnPrimary}>
            {children}
        </button>
    );
};

export default ButtonPrimary;