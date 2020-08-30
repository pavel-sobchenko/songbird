import React from "react";
import "./AnswerList.scss"
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = props => {
    //  const arr = props.answers
    return (
        <div className="col-md-6">
            <ul className="item-list list-group">
                {
                    props.answers.map((answer, index) => {
                        return (
                            <AnswerItem
                                key={index}
                                answer={answer}
                                onAnswerClick={props.onAnswerClick}
                                state={props.state ? props.state[answer.id] : null}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AnswerList
