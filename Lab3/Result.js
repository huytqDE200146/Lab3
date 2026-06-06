import React, { Component } from 'react';

class Result extends Component {
  render() {
    const { score, total, onRestart } = this.props;

    return (
      <div>
        <h2>Quiz Ended</h2>
        <p>Your Score: {score} / {total}</p>
        <button onClick={onRestart}>Play Again</button>
      </div>
    );
  }
}

export default Result;