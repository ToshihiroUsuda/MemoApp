import React, { useCallback } from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import { Button } from '@rneui/themed';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useScreenNavigation } from '../screens/navigation';
import { FormTextInput, Form, schema } from './FormTextInput';

type UserFormProps = {
  onSubmit?: (event?: GestureResponderEvent) => void;
};

const UserForm: React.FC<UserFormProps> = (props) => {
  const navigation = useScreenNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<Form>({
    mode: 'all',
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });
  const isInvalid: boolean = Object.keys(errors).length > 0 || !isDirty;

  const onValid = (data: Form) => {
    console.log(data);
    if (props.onSubmit) {
      props.onSubmit();
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'MemoList' }],
    });
  };

  return (
    <View style={styles.form}>
      <FormTextInput
        control={control}
        areaName="email"
        label="メールアドレス"
        placeholder="Email Adress"
        autoComplete="email"
        autoCapitalize="none"
      />
      <FormTextInput
        control={control}
        areaName="password"
        label="パスワード"
        placeholder="Password"
        autoComplete="password"
        autoCapitalize="none"
        secureTextEntry
      />
      <Button
        title="Submit"
        onPress={(event: GestureResponderEvent) => void handleSubmit(onValid)(event)}
        disabled={isInvalid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 24,
  },
});

export default UserForm;
