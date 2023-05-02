import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import TestScreen from './src/screens/TestScreen';

const App: React.FC = () => {
  return (
    <TestScreen message='ReactNative'/>
  );
};

export default App;