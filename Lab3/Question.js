import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      isSubmitted: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.question !== this.props.question) {
      this.setState({ selectedOption: null, isSubmitted: false });
    }
  }

  handleSelectOption = (option) => {
    if (this.state.isSubmitted) return;
    this.setState({ selectedOption: option });
  };

  handleSubmit = () => {
    const { selectedOption } = this.state;
    const { correctAnswer, onSubmit } = this.props;
    if (!selectedOption) return;
    const isCorrect = selectedOption === correctAnswer;
    this.setState({ isSubmitted: true });
    onSubmit(isCorrect);
  };

  render() {
    const { question, options, correctAnswer, questionNumber, total, onNext } = this.props;
    const { selectedOption, isSubmitted } = this.state;

    return (
      <div>
        <p>Question {questionNumber} / {total}</p>
        <h2>{question}</h2>

        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => this.handleSelectOption(option)}
              disabled={isSubmitted}
            />
            <label> {option}</label>
          </div>
        ))}

        {isSubmitted && (
          <p>
            {selectedOption === correctAnswer
              ? ' Correct!'
              : ` Wrong! Correct answer: ${correctAnswer}`}
          </p>
        )}

        {!isSubmitted && (
          <button onClick={this.handleSubmit} disabled={!selectedOption}>
            Submit
          </button>
        )}

        {isSubmitted && (
          <button onClick={onNext}>
            {questionNumber >= total ? 'See Results' : 'Next'}
          </button>
        )}
      </div>
    );
  }
}

export default Question;