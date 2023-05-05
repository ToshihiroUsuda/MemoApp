import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader';
import MemoList from '../components/MemoList';

const MemoListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader />
      {/* MemoList */}
      <MemoList />
      {/* Button*/}
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default MemoListScreen;
