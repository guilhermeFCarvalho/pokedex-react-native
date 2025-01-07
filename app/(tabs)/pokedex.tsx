import { useWebViewHandler } from '@/src/hooks/useWebViewHandler';
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';


export default function PokedexScreen() {
  
  const handleWebViewMessage = useWebViewHandler();

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


