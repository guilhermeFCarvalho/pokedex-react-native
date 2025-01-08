import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../models/pokemon";

interface FavoritesState {
    favorites: Pokemon[];
}

const initialState: FavoritesState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<Pokemon>) {

            const isAlreadyFavorite = state.favorites.some(
                (pokemon) => pokemon.name === action.payload.name
            );

            if (!isAlreadyFavorite) {
                state.favorites.push(action.payload);
            }

        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter(
                (pokemon) => pokemon.name !== action.payload
            );
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

