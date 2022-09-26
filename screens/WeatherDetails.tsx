import React, {useState, useEffect} from 'react';
import {Text, View, ActivityIndicator, Image, StyleSheet} from 'react-native';

const WeatherDetails = ({route}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherInfo, setWeatherInfo] = useState({});

  const getData = async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=eafdd3c031560287f05e0ca79e2b408b&query=${route.params.capital}`,
      );
      const json = await response.json();
      setWeatherInfo(json.current);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
    console.log(weatherInfo);
  }, []);
  return isLoading ? (
    <ActivityIndicator
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    />
  ) : (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>CountryDetails</Text>
      <View style={styles.countryDetails}>
        <Image
          source={{uri: weatherInfo.weather_icons[0]}}
          style={[styles.info, {height: 100, width: 200}]}
        />
        <Text style={styles.info}>
          Temperature : {weatherInfo.temperature}&deg; C
        </Text>
        <Text style={styles.info}>Precipitation : {weatherInfo.precip} %</Text>
        <Text style={styles.info}>
          Wind Speed : {weatherInfo.wind_speed} kmph
        </Text>
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

export default WeatherDetails;
