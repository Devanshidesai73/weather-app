import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CountryDetails from './screens/CountryDetails';
import WeatherDetails from './screens/WeatherDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Country" component={CountryDetails} />
        <Stack.Screen name="Weather" component={WeatherDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
