import React, { Component } from 'react';

class DownloadPage extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("I've been clicked!");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Download Page</h3>
        <input type="submit" value="Download Me!" />
      </form>
    );
  }
}

export default DownloadPage;
