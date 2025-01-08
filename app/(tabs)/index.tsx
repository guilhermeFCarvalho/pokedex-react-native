import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/src/components/common/Themed';
import { MonoText } from '@/src/components/common/StyledText';
import WebView from 'react-native-webview';
import { useState } from 'react';

export default function HomeScreen() {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={styles.container} >
      <Image
        source={require("@/assets/images/pokemon-cafe.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Bem-vindo à Pokédex</Text>
      <MonoText style={styles.subtitle}>
        Explore e descubra seus Pokémon favoritos!
      </MonoText>
      {!loaded && (
        <WebView
          source={{ uri: process.env.EXPO_PUBLIC_WEBVIEW_URL || "" }}
          onLoadEnd={() => {
            setLoaded(true);
          }}
          cacheEnabled={true}
          containerStyle={{ width: 0, height: 0, position: 'absolute' }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4500',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
  },
});
