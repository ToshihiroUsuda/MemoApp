import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

import AppHeader from '../components/AppHeader';
import CircleButton from '../components/CircleButton';

const MemoEditScreen: React.FC = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppHeader />
      <View style={styles.memoBody}>
        <TextInput
          multiline
          autoFocus
          style={styles.memoBodyText}
          value="学習は日々の積み重ねが大切です。
          調査によると、学習を習慣化している受講生の方がそうでない受講生より学習目標を達成する可能性が高いようです。
          学習スケジューラーを使って学習時間を確保しておき、リマインダーを受け取りましょう."
        />
      </View>
      <CircleButton name="check" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoBody: {
    marginTop: 104,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MemoEditScreen;
