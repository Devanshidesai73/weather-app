import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';

const CountryDetails = ({route, navigation}: any) => {
  const [countryInfo, setCountryInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${route.params.countryName}`,
      );
      const json = await response.json();

      const data = json.find(
        (country: any) =>
          country.name.common === route.params.countryName && country,
      );
      setCountryInfo(data);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (capital: String) => {
    navigation.navigate('Weather', {capital: capital});
  };

  return isLoading ? (
    <ActivityIndicator
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    />
  ) : (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>CountryDetails</Text>
      <View style={styles.countryDetails}>
        <Image
          source={{uri: countryInfo.flags.png}}
          style={[styles.info, {height: 100, width: 200}]}
        />
        <Text style={styles.info}>Capital : {countryInfo.capital}</Text>
        <Text style={styles.info}>
          Country's Population : {countryInfo.population}
        </Text>
        <Text style={styles.info}>Latitude : {countryInfo.latlng[0]}</Text>
        <Text style={styles.info}>Longitude : {countryInfo.latlng[1]}</Text>
        <Button
          title="Capital Weather"
          onPress={() => handleSubmit(countryInfo.name.common)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  countryDetails: {
    flex: 1,
    padding: 20,
  },
  info: {
    marginBottom: 20,
  },
});

export default CountryDetails;
