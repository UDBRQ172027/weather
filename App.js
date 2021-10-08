import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, DarkTheme, Text, Title } from 'react-native-paper';

import DropDown from 'react-native-paper-dropdown';

import CatalogueService from './services/CatalogueService';
import WeatherService from './services/WeatherService';
import { TEMPSIMBOL } from '@env';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const [showWeather, setShowWeather] = useState(false)
  const [loading, setLoading] = useState(false)

  const [municipality, setMunicipality] = useState(null)
  const [weather, setWeather] = useState(null);
  const getWeather = async (municipality) => {
    setWeather(null)
    setLoading(true)
    setMunicipality(municipality)
    setWeather(await WeatherService.getCurrentWeather(municipality))
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <DropDown
        label='Municipio'
        mode='outlined'
        visible={showWeather}
        showDropDown={() => setShowWeather(true)}
        onDismiss={() => setShowWeather(false)}
        value={municipality}
        setValue={getWeather}
        list={CatalogueService.getCities()}
      />
      {
        weather && (
          <View>
            <Title style={styles.titleName}>{weather.name}</Title>
            <Ionicons name={CatalogueService.getIcon()[weather.weather[0]['icon']]} color='white' size={60} style={styles.weatherIcon} />
            <Text style={styles.weatherText}><Ionicons name='thermometer-outline' size={20}/>{weather.main.temp}{TEMPSIMBOL}</Text>
            <Text style={styles.weatherText}>{weather.weather[0]['main']}</Text>
            <Text style={styles.weatherText}>Minimo: {weather.main.temp_min}{TEMPSIMBOL} - Maximo: {weather.main.temp_max}{TEMPSIMBOL}</Text>
            <Text style={styles.weatherText}>Humedad: {weather.main.humidity}%</Text>
            <Text style={styles.weatherText}>Viento: {weather.wind.speed} m/s</Text>
          </View>
        ) || (
          <View>
            { 
              loading ? (
                <ActivityIndicator animating={true} color={DarkTheme.colors.primary} style={styles.loadAnimation} />
              ): (
                <></>
              )
            }
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    flex: 1,
    backgroundColor: DarkTheme.colors.background,
  },
  titleName: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30
  },
  weatherText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20
  },
  weatherIcon: {
    alignSelf: 'center'
  },
  loadAnimation: {
    marginTop: 50
  }
});
