import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '@/src/reducers/favoriteSlice';
import { WebViewMessageEvent } from 'react-native-webview';
import { Pokemon } from '../models/pokemon';
import { safeParseJSON } from '../utils/safeParseJSON';


export type PokemonLiked = Pokemon & {
  liked: boolean;
};

export function useWebViewHandler() {
  const dispatch = useDispatch();

  return useCallback((event: WebViewMessageEvent) => {
    const { data } = event.nativeEvent;

    const parsedData = safeParseJSON<PokemonLiked>(data);
    if (parsedData) {
      if (parsedData.liked) {
        dispatch(addFavorite(parsedData));
      } else {
        dispatch(removeFavorite(parsedData.name));
      }
    }
  }, [dispatch]);
}
