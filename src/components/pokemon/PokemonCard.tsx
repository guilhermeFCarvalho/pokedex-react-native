import { Pokemon } from "@/src/models/Pokemon";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

interface IPokemonCardProps {
    pokemon: Pokemon;
    onPress: () => void;
}

export default function PokemonCard({ pokemon, onPress }: IPokemonCardProps) {
    return (
        <View style={styles.pokemonCard}>
            <Image source={{ uri: pokemon.image }} style={styles.pokemonImage} />
            <Text style={styles.pokemonName}>{pokemon.name}</Text>
            <Text style={styles.pokemonDetail}>{pokemon.types.join(', ')}</Text>
            <Text style={styles.pokemonDetail}>{pokemon.abilities.join(', ')}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={onPress}>
                <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
        margin: 16,
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
        fontSize: 12,
        color: '#555',
        textAlign: 'center',
        marginBottom: 8,
        textTransform: 'capitalize'
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
