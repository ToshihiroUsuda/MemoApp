import React, { useCallback } from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import { Input, Button } from '@rneui/themed';

import { useScreenNavigation } from '../screens/navigation';

type UserFormProps = {
  onSubmit?: (event?: GestureResponderEvent) => void;
};

const UserForm: React.FC<UserFormProps> = (props) => {
  const { onSubmit } = props;
  const navigation = useScreenNavigation();
  const handleSubmit = useCallback(() => {
    if (onSubmit) {
      onSubmit();
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'MemoList' }],
    });
  }, [navigation, onSubmit]);
  return (
    <View style={styles.form}>
      <Input placeholder="Email Adress" />
      <Input placeholder="Passward" />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 24,
  },
});

export default UserForm;
