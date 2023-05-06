import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppHeader from '../components/AppHeader';
import MemoList from '../components/MemoList';
import RaisedCircleButton from '../components/CircleButton';

const MemoListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader />
      {/* MemoList */}
      <MemoList />
      {/* Button*/}
      <RaisedCircleButton name="add" />
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
