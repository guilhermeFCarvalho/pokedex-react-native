import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';


export default function PokedexScreen() {

  return (
    <SafeAreaView style={{ flex: 1, }}>

      <WebView
        source={{ uri: "http://192.168.5.66:3000" }}
        cacheEnabled={true}
        cacheMode={'LOAD_CACHE_ELSE_NETWORK'}
        androidLayerType="hardware"
        javaScriptEnabled={true}
        onMessage={message => { console.log({ message }) }}
        startInLoadingState={true}
        incognito={false}
      />
    </SafeAreaView>
  );
}


