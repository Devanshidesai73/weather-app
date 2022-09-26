import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  const [country, setCountry] = useState('');

  const handleSubmit = (country: String) => {
    navigation.navigate('Country', {countryName: country});
    setCountry('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter the country name"
        value={country}
        onChangeText={setCountry}
      />
      <Button
        disabled={country.trim() === '' ? true : false}
        title="Submit"
        onPress={() => handleSubmit(country)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
