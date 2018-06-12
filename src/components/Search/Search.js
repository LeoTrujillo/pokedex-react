import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Tenemos éste valor', this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <div className="control">
            <input type="text" className="input is-rounded" value={this.state.value} placeholder="Buscar Pokémon" onChange={this.handleChange} required />
          </div>
          <button className="button is-primary" type="submit">Buscar</button>
        </form>
      </div>
    )
  }
}

export default Search;