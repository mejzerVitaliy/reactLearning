import React from 'react'
import classes from './CreatePostBtn.module.css'
function CreatePostBtn({children, ...props}) {
    return (
        <button {...props}  className={classes.myBtn}>
            {children}
        </button>
    )
}

export default CreatePostBtn