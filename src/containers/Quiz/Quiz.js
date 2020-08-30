import React, {Component} from "react";
import "./Quiz.scss"
import Header from "../../components/Header/Header";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import Answers from "../../components/Answers/Answers";
import birdsData from "../../service/data-service";
import categories from "../../service/categories"
import {getRandomInt} from "../../utils/Utils"
import Button from "../../components/UI/Button/Button";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {

    constructor(props ) {
        super(props)

        this.state = {
            isFinished: false,
            totalScore: 0,
            activeQuestion: 0,
            currentScore: 0,
            correctAnswerIndex: 0,
            correctAnswer: null,
            selectedAnswerIndex: null,
            results: {}
        }
    }

    componentDidMount() {
        const a = getRandomInt(0, 5)
        this.setState({
            correctAnswerIndex: a,
            currentScore: birdsData[this.state.activeQuestion].length
        })
    }

    onAnswerClickHandler = (answerId) => {

        this.setState({
            selectedAnswerIndex: answerId-1
        })

        if (this.state.results) {
            const key = Object.keys(this. state.results)
            if (key.includes(answerId + "")) {
                return
            }
        }

        const results = this.state.results
        if(answerId - 1 === this.state.correctAnswerIndex) {
            results[answerId] = 'success'

            this.setState({
                correctAnswer: birdsData[this.state.activeQuestion][this.state.correctAnswerIndex],
                results,
                totalScore: this.state.totalScore + this.state.currentScore
            })

            if (this.isQuizFinished()) {
                this.setState({isFinished: true})
            }
        } else {
            results[answerId] = 'error'
            this.setState({
                results,
                currentScore: this.state.currentScore - 1
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === birdsData.length
    }

    onNextClickHandler = () => {
        this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            currentScore: birdsData[this.state.activeQuestion].length,
            correctAnswerIndex: getRandomInt(0, 5),
            correctAnswer: null,
            selectedAnswerIndex: null,
            results: {}
        })
    }

    onRetryHandler = () => {
        this.setState({
            isFinished: false,
            totalScore: 0,
            activeQuestion: 0,
            currentScore: 0,
            correctAnswerIndex: 0,
            correctAnswer: null,
            selectedAnswerIndex: null,
            results: {}
        })
    }

    render() {
        const answerList = birdsData[this.state.activeQuestion]
        return (
            <div className="Quiz">
                <Header
                    totalScore={this.state.totalScore}
                    categories={categories}
                    active={this.state.activeQuestion}
                />
                {
                    this.state.isFinished ?
                        <FinishedQuiz
                            totalScore={this.state.totalScore}
                            onRetry={this.onRetryHandler}
                        />
                        :
                        <React.Fragment>
                            <ActiveQuiz
                                correctAnswer={this.state.correctAnswer}
                                audio={answerList[this.state.correctAnswerIndex].audio}
                            />
                            <Answers
                                answers={answerList}
                                selectedAnswerIndex={this.state.selectedAnswerIndex}
                                onAnswerClick={this.onAnswerClickHandler}
                                state={this.state.results}
                            />
                            <Button
                                isEnabled={this.state.selectedAnswerIndex === this.state.correctAnswerIndex}
                                onButtonClick={this.onNextClickHandler}
                                title="Next level"
                            />
                        </React.Fragment>
                }
            </div>
        )
    }
}

export default Quiz
