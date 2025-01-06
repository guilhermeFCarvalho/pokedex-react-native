import { StyleSheet, Image } from 'react-native';

import { Text, View, } from '@/components/Themed';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducers/store';

export default function FavoritesScreen() {

  const pokemons = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  return (
    <View style={styles.container}>
      {pokemons.map((pokemon, index) => {
        return (
          <View key={index}>
            <Image source={{ uri: pokemon.image }} width={100} height={100}></Image>
            <Text >{pokemon.name}</Text>
            <Text >{pokemon.types.join(' ')}</Text>
            <Text >{pokemon.abilities.join(' ')}</Text>

          </View>
        )
      })}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
