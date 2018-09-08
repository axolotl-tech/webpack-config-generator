import React, { Component } from 'react';

class DownloadPage extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    // Note: Traditional AJAX requests won't open the necessary dialog box
    window.open('/api/configurator/download');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Download Page</h3>
          <input type="submit" value="Download Me!" />
        </form>
      </div>
    );
  }
}

export default DownloadPage;
