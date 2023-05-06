import React, { useCallback } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useTheme } from '@rneui/themed';

import RaisedCircleButton from '../components/CircleButton';
import { MemoEditScreenProps } from './navigation';

const MemoEditScreen: React.FC<MemoEditScreenProps> = (props) => {
  const { navigation } = props;
  const { theme } = useTheme();
  const handlePress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior="padding"
    >
      <View style={styles.memoBody}>
        <TextInput
          multiline
          autoFocus
          style={[styles.memoBodyText, { color: theme.colors.black }]}
          textAlignVertical={'top'}
          value="学習は日々の積み重ねが大切です。
          調査によると、学習を習慣化している受講生の方がそうでない受講生より学習目標を達成する可能性が高いようです。
          学習スケジューラーを使って学習時間を確保しておき、リマインダーを受け取りましょう."
        />
      </View>
      <RaisedCircleButton name="check" onPress={handlePress} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
  },
});

export default MemoEditScreen;
