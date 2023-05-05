import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@rneui/themed';

import AppHeader from '../components/AppHeader';
import CircleButton from '../components/CircleButton';

const MemoDetailScreen: React.FC = () => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={[styles.memoInfoBar, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.momoInfoTitle}>買い物リスト</Text>
        <Text style={styles.memoInfoDate}>2023/5/5 10:00</Text>
      </View>
      <CircleButton name="edit" style={{ top: 160, bottom: 'auto' }} />
      <View style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          学習は日々の積み重ねが大切です。
          調査によると、学習を習慣化している受講生の方がそうでない受講生より学習目標を達成する可能性が高いようです。
          学習スケジューラーを使って学習時間を確保しておき、リマインダーを受け取りましょう。
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoInfoBar: {
    marginTop: 104,
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  momoInfoTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  memoInfoDate: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MemoDetailScreen;
