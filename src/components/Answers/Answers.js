import React from "react";
import "./Answers.scss"
import AnswerList from "./AnswersList/AnswerList";
import Description from "./Description/Description";
import Button from "../UI/Button/Button";

const Answers = props => {
    const arr = props.selectedAnswerIndex
    return (
        <div className="Answers">
            <div className="row mb2">
                <AnswerList
                    state={props.state}
                    answers={props.answers}
                    onAnswerClick={props.onAnswerClick}
                />
                <Description
                    selectedItem={props.selectedAnswerIndex || props.selectedAnswerIndex > -1 ? props.answers[props.selectedAnswerIndex] : null}
                />
            </div>
        </div>
    )
}

export default Answers

