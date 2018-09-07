
import React from 'react';


class Form extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      value: '',
      entry: '',
      output: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name
    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:4000/api/configurator/create', {
      method: 'POST',
      body: JSON.stringify({
        entry: event.target.entry.value, //this.entry.value, 
        output: event.target.output.value// this.output.value
      }),
    }).then(function(response) {
      console.log('line 50 of fetch');
      console.log(response);
      return response
    }).then(function(body) {
      console.log('line 53 of fetch');
      console.log(body);
    });
  }

  render() {
    return (
      <div> 
        <h3>Welcome!</h3>
        <form onSubmit={this.handleSubmit}>
          <label> Question 1 re: entry here: </label>
            <input 
              name="entry"
              type="text" 
              value={this.state.entry} 
              onChange={this.handleChange} 
            />
          <label> Question 2 re: output here: </label>
            <input 
              name="output"
              type="text" 
              value={this.state.output}
              onChange={this.handleChange} 
            />
            <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Form;