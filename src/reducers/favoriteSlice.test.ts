import { Pokemon } from '../models/Pokemon';
import favoritesReducer, { addFavorite, removeFavorite } from './favoriteSlice';

describe('favoritesSlice', () => {
  const initialState = { favorites: [] };

  it('should add a favorite when addFavorite is called', () => {
    const pokemon: Pokemon = { name: '', abilities: [], image: '', types: [] };
    const action = addFavorite(pokemon); 

    const nextState = favoritesReducer(initialState, action);

    expect(nextState.favorites).toContainEqual(pokemon);
  });

  it('should not add a favorite if it already exists', () => {
    const pokemon: Pokemon = { name: '', abilities: [], types: [], image: '' };
    const initialStateWithFavorite = { favorites: [pokemon] };
    const action = addFavorite(pokemon);
    const nextState = favoritesReducer(initialStateWithFavorite, action);

    expect(nextState.favorites).toHaveLength(1);
  });

  it('should remove a favorite when removeFavorite is called', () => {
    const pokemon: Pokemon = { name: '', abilities: [], types: [], image: '' };
    const initialStateWithFavorite = { favorites: [pokemon] };
    const action = removeFavorite(pokemon.name);
    const nextState = favoritesReducer(initialStateWithFavorite, action);

    expect(nextState.favorites).not.toContainEqual(pokemon);
  });

  it('should not remove a favorite if it does not exist', () => {
    const pokemon: Pokemon = { name: '', abilities: [], types: [], image: '' };
    const initialStateWithNoFavorite = { favorites: [] };
    const action = removeFavorite(pokemon.name);
    const nextState = favoritesReducer(initialStateWithNoFavorite, action);

    expect(nextState.favorites).toHaveLength(0);
  });
});
