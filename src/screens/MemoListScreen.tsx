import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@rneui/themed';

import MemoList from '../components/MemoList';
import RaisedCircleButton from '../components/CircleButton';

const MemoListScreen: React.FC = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <MemoList />
      <RaisedCircleButton name="add" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MemoListScreen;
