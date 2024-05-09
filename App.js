import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DevelopmentScreen from './screens/DevelopmentScreen';
import PhotoScreen from './screens/PhotosScreen';
import PrivateScreen from './screens/PrivateScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Development' component={DevelopmentScreen} />
        <Stack.Screen name='Photos' component={PhotoScreen} />
        <Stack.Screen name='Private' component={PrivateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

