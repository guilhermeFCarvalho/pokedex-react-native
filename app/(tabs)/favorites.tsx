import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/reducers/store';
import { removeFavorite } from '@/reducers/favorite-slice';

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
              <View key={index} style={styles.pokemonCard}>
                <Image
                  source={{ uri: pokemon.image }}
                  style={styles.pokemonImage}
                />
                <Text style={styles.pokemonName}>{pokemon.name}</Text>
                <Text style={styles.pokemonDetail}>{pokemon.types.join(', ')}</Text>
                <Text style={styles.pokemonDetail}>{pokemon.abilities.join(', ')}</Text>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemove(pokemon.name)}
                >
                  <Text style={styles.removeButtonText}>Remover</Text>
                </TouchableOpacity>
              </View>
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
  pokemonCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    width: 150,
    margin: 16
  },
  pokemonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2a75bb',
    marginBottom: 4,
  },
  pokemonDetail: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
  },
  removeButton: {
    backgroundColor: '#ff5959',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  removeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
