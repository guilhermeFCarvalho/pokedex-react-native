import { addFavorite, removeFavorite } from '@/reducers/favorite-slice';
import { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { useDispatch } from 'react-redux';


export default function PokedexScreen() {
  const dispatch = useDispatch();

  const handleWebViewMessage = useCallback((event: WebViewMessageEvent) => {
    try {
      const { data } = event.nativeEvent;
      const parsedData = JSON.parse(data);

      if (parsedData?.pokemon) {
        if (parsedData?.liked) {
          dispatch(addFavorite(parsedData.pokemon));
        } else {
          dispatch(removeFavorite(parsedData.pokemon.name));
        }
      }

    } catch (error) {
      console.error('Erro ao processar a mensagem do WebView:', error);
    }
  }, [dispatch]);




  return (
    <SafeAreaView style={{ flex: 1, }}>

      <WebView
        source={{ uri: "http://192.168.5.66:3000" }}
        cacheEnabled={true}
        cacheMode={'LOAD_CACHE_ELSE_NETWORK'}
        androidLayerType="hardware"
        javaScriptEnabled={true}
        onMessage={handleWebViewMessage}
        startInLoadingState={true}
        incognito={false}
      />
    </SafeAreaView>
  );
}


