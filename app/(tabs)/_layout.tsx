import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/src/components/common/useColorScheme';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/reducers/store';
import { View, Text } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const favoriteCount = useSelector(
    (state: RootState) => state.favorites.favorites.length
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pokedex"
        options={{
          title: 'Pokedex',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: `Favoritos${favoriteCount > 0 ? ` (${favoriteCount})` : ''}`,
          tabBarIcon: ({ color }) => {
            return (

              <View style={{ position: 'relative' }}>
                <TabBarIcon name="heart" color={color} />
                <View
                  style={{
                    backgroundColor: Colors.light.tabIconSelected,
                    padding: 4,
                    borderRadius: 12,
                    alignItems: 'center',
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%'

                  }}>
                  <Text style={{ color: '#fff' }}>{favoriteCount}</Text>
                </View>
              </View>


            );
          },
        }}
      />
    </Tabs>
  );
}
