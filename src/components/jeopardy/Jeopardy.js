import React, { Component } from "react";
//import our service
import JeopardyService from "../../services/JeopardyService";
import Display from "../display/Display";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
        answer: "",
      },
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({
      formData: {
        answer: event.target.value,
      },
    });
  };

  submitAnswer = (event) => {
    event.preventDefault();
    let score = this.state.score;
    if (this.state.formData.answer === this.state.data.answer) {
      this.setState({
        score: (score += this.state.data.value),
      });
    } else {
      this.setState({
        score: (score -= this.state.data.value),
      });
    }
    this.getNewQuestion();
  };
  //display the results on the screen
  render() {
    return (
      <div>
        <div className="Question">
          <Display
            question={this.state.data.question}
            category={this.state.data.category}
            value={this.state.data.value}
          />
          <form onSubmit={this.submitAnswer}>
            <input type="text" onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>

          <h4>Users Score: {this.state.score}</h4>
        </div>
      </div>
    );
  }
}
export default Jeopardy;
