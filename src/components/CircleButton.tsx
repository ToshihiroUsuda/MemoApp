import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { FAB, useTheme } from '@rneui/themed';

type CircleButtonProps = {
  name: string;
  style?: ViewStyle;
};

const RaisedCircleButton: React.FC<CircleButtonProps> = ({ name, style = {} }) => {
  const { theme } = useTheme();
  return (
    <FAB
      color={theme.colors.primary}
      raised
      radius={100}
      style={[styles.circleButton, style]}
      icon={{ name, color: 'white' }}
    />
  );
};

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
});

export default RaisedCircleButton;
