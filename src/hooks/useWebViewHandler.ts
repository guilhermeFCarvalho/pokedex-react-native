import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '@/src/reducers/favoriteSlice';
import { WebViewMessageEvent } from 'react-native-webview';

export function useWebViewHandler() {
  const dispatch = useDispatch();

  return useCallback((event: WebViewMessageEvent) => {
    try {
      const { data } = event.nativeEvent;
      const parsedData = JSON.parse(data);

      if (parsedData) {
        if (parsedData.liked) {
          dispatch(addFavorite(parsedData));
        } else {
          dispatch(removeFavorite(parsedData.name));
        }
      }
    } catch (error) {
      console.error('Erro ao processar a mensagem do WebView:', error);
    }
  }, [dispatch]);
}
