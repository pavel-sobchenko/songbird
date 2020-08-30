import React from "react";
import "./Button.scss"

const Button = props => {
    const cls = ['btn']
    if (props.isEnabled) {
        cls.push('btn-success')
    } else {
        cls.push('btn-secondary disabled')
    }
    return (
        <div className="Button">
            <button
                className={cls.join(' ')}
                onClick={props.onButtonClick}
            >
                {props.title}
            </button>
        </div>
    )
}

export default Button
