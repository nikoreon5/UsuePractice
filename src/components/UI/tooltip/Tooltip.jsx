import React from 'react';
import classes from './Tooltip.module.css'
const Tooltip = ({text}) => {
    return (
        <div className={classes.infoContainer}>
            <span className={classes.infoIcon}>i</span>
            <div className={classes.infoTooltip}>
                {text}
            </div>
        </div>
    );
};

export default Tooltip;