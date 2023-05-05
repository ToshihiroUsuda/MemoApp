import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { FAB, useTheme } from '@rneui/themed';

type CircleButtonProps = {
  name: string;
  style?: ViewStyle;
};

const CircleButton: React.FC<CircleButtonProps> = ({ name, style = {} }) => {
  const { theme } = useTheme();
  return (
    <FAB
      color={theme.colors.primary}
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
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.0)', // dummy
  },
});

export default CircleButton;
