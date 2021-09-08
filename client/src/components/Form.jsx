import React from 'react';

export default class Form extends React.Component {
  constructor (props) {
  super (props);
  this.state = {
    url: ''
  }

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  };

  onChange (event) {
    this.setState({[event.target.name]: event.target.value});

  };

  onSubmit (event) {
    event.preventDefault();
    this.props.urlShortener(this.state.url);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Enter URL:
            <input type="text" name="url" value={this.state.url} onChange={this.onChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  };
};

