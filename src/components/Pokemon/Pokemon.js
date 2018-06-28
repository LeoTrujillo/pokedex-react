import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadPokemons } from '../../actions/index';
import './Pokemon.css';

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadPokemons: () => dispatch(loadPokemons())
  }
}

const url_img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


const PokemonList = ({pokemons}) => (
  <div className="flex">
    {pokemons.map((pokemon, index) => {
      const thumbnail = `${url_img}${pokemon.id}.png`
      return (
        <div key={index.toString()} className='item-pokemon'>
          <img src={thumbnail} alt='pokemon'/>
          <span className='pokemon-name'> #{pokemon.id} {pokemon.pokemon.name} </span>
        </div>
      );
    })}
  </div>
)

class Pokemon extends Component {

  componentDidMount() {
    this.props.loadPokemons();
  }


  render() {
    return(
      <PokemonList pokemons={this.props.pokemons}></PokemonList>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);