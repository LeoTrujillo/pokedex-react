import React, { Component } from 'react';
import Navbar from './components/Navbar/Nabvar';
import Pokemon from './components/Pokemon/Pokemon';
import Search from './components/Search/Search';
import Comment from './components/Comment/Comment';

import './index.css';

function Compo(props) {
 const showPokemons = props.showPokemons;
 if(showPokemons) {
   return (
     <div>
       <Search />
       <Pokemon />
     </div>
  );
 }
 return <Comment />;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: true }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({pokemon: !prevState.pokemon}));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container margin-top">
          <button className="button is-danger" onClick={this.handleToggle}>{this.state.pokemon ? 'Comentarios' : 'Pokémons'}</button>
          <Compo showPokemons={this.state.pokemon}/>
        </div>
      </div>
    );
  }
}

export default App;
