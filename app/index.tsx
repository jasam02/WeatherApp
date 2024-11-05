import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  const [weatherData, setWeatherData] = useState();

  const getWeather = async () => {
    try {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=40.7608&longitude=-111.8911&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,cloud_cover&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver');
      setWeatherData(response.data.hourly);
    } catch (error) {
      console.error('Error getting weather data:', error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <ThemedText type="title">Weather Forecast</ThemedText>
    
      <Button title="Update Weather" onPress={getWeather} />

      {weatherData && (
        <View style={styles.weatherInfo}>
          <Text>Time: {weatherData.time[0]}</Text>
          <Text>Temperature: {weatherData.temperature_2m[0]}°F</Text>
          <Text>Humidity: {weatherData.relative_humidity_2m[0]}%</Text>
          <Text>Cloud Cover: {weatherData.cloud_cover[0]}%</Text>
          <Text>Chance of Rain: {weatherData.precipitation_probability[0]}%</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  weatherInfo: { 
    margin: 20 
  },
});