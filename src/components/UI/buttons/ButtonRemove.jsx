import React from 'react';
import classes from './ButtonRemove.module.css'
const ButtonRemove = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btnRemove}>
            {children}
        </button>
    );
};

export default ButtonRemove;