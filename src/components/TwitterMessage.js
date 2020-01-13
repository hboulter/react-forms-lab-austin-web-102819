import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={event => this.handleInputChange(event)}
          value={this.state.input}
        />
        {this.props.maxChars - this.state.input.length}
      </div>
    );
  }
}

export default TwitterMessage;
