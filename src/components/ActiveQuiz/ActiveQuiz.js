import React from "react";
import "./ActiveQuiz.scss"
import Picture from "../UI/Picture/Picture";
import Player from "../UI/Player/Player";
import pic from "./bird.gif"

const ActiveQuiz = props => (
    <div className="ActiveQuiz">
        <Picture
            src={props.correctAnswer ? props.correctAnswer.image : pic}
            alt="Title"
            width={150}
            height={150}
        />
        <div className="QuizCard">
            <div className="QuizAnswer">{props.correctAnswer ? props.correctAnswer.name : <h1>*****</h1>}</div>
            <Player audio={props.audio}/>
        </div>
    </div>
)

export default ActiveQuiz
