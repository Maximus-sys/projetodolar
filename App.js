/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

  const [exchange, setExchange] = useState('');
  const [loading, setLoading] = useState(true);

  const request = () => {
    fetch('https://economia.awesomeapi.com.br/all/USD-BRL').then((response) => response.json()).then((res) => {
      console.log(res.USD);
      setExchange(res.USD.ask);
      setLoading(false);
    })
  }

  useEffect(() => {
    request();
  }, [])


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {
          loading ? (
        <ActivityIndicator size={80} color="#7159C1" />
          ) : (<Text>Cotação dolar: {exchange}</Text>)
        }
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
