import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/src/components/common/Themed';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/src/reducers/store';
import { removeFavorite } from '@/src/reducers/favoriteSlice';
import PokemonCard from '@/src/components/pokemon/PokemonCard';

export default function FavoritesScreen() {
  const dispatch = useDispatch();
  const pokemons = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const handleRemove = (pokemonName: string) => {
    dispatch(removeFavorite(pokemonName));
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Favoritos</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {pokemons.length === 0 ? (
          <Text style={styles.emptyText}>Você ainda não tem Pokémons favoritos!</Text>
        ) : (
          <View style={styles.pokemonList}>
            {pokemons.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} onPress={() => handleRemove(pokemon.name)}  ></PokemonCard>

            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    backgroundColor: '#ff6363',
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  pokemonList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

});
