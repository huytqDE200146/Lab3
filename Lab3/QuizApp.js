import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter"
        },
        {
          id: 3,
          question: "What is the chemical symbol for water?",
          options: ["H2O", "CO2", "O2", "NaCl"],
          answer: "H2O"
        },
        {
          id: 4,
          question: "Who wrote 'Romeo and Juliet'?",
          options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Homer"],
          answer: "William Shakespeare"
        },
        {
          id: 5,
          question: "How many continents are there on Earth?",
          options: ["5", "6", "7", "8"],
          answer: "7"
        }
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false
    };
  }

  handleSubmitAnswer = (isCorrect) => {
    this.setState((prev) => ({
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };

  handleNext = () => {
    const { currentQuestion, questions } = this.state;
    if (currentQuestion + 1 >= questions.length) {
      this.setState({ quizEnd: true });
    } else {
      this.setState({ currentQuestion: currentQuestion + 1 });
    }
  };

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    return (
      <div>
        <h1>Quiz App</h1>
        <p>Score: {score}</p>

        {quizEnd ? (
          <Result
            score={score}
            total={questions.length}

          />
        ) : (
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            correctAnswer={questions[currentQuestion].answer}
            questionNumber={currentQuestion + 1}
            total={questions.length}
            onSubmit={this.handleSubmitAnswer}
            onNext={this.handleNext}
          />
        )}
      </div>
    );
  }
}

export default QuizApp;