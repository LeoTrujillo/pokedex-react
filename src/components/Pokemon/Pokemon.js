import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v1/sprite/?limit=150')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log('Data', data);
        let pokemons = data.objects.map((pokemon, index) => {
          if (pokemon.id === 4) pokemon.id = 3 ;
          const thumbnail = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
          return(
            <div key={index.toString()} className='item-pokemon'>
              <img src={thumbnail} alt='pokemon'/>
              <span className='pokemon-name'> #{pokemon.id} {pokemon.pokemon.name} </span>
            </div>
          )
        });
        this.setState({pokemons: pokemons});
      });
  }

  render() {
    return(
      <div className='flex'>
        {this.state.pokemons}
      </div>
    )
  }
}

export default Pokemon;