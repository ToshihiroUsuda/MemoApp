import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from '@rneui/themed';

const UserForm: React.FC = () => {
  return (
    <View style={styles.form}>
      <Input placeholder="Email Adress" />
      <Input placeholder="Passward" />
      <Button title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 24,
  },
});

export default UserForm;
