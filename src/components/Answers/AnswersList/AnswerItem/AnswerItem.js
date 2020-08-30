import React from "react";
import "./AnswerItem.scss"

const AnswerItem = props => {

    const cls = ["li-btn"]

    if(props.state) {
        cls.push(props.state)
    }

    return (
        <li className="list-group-item"
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            <span className={cls.join(' ')}></span>
            {props.answer.name}
        </li>
    )
}

export default AnswerItem
