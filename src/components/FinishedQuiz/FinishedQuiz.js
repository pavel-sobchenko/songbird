import React from "react";
import "./FinishedQuiz.scss"
import Button from "../UI/Button/Button";
import pic from "./eagle.jpg"

const FinishedQuiz = props => {
    return (
        <div className="FinishedQuiz">
            <p>Congratulations!</p>
            {props.totalScore === 36 ?
                <div className="kingOfTheGame">
                    <p><h1>You are the king of the game!!!</h1></p>
                    <img src={pic} width="400" height="300"/>
                </div>
             : null
            }
            <p>Your total score: {props.totalScore}</p>
            <Button
                onButtonClick={props.onRetry}
                title="Repeat the quiz"
                isEnabled={true}
            />
        </div>
    )
}

export default FinishedQuiz
