import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, Button } from '@rneui/themed';

import AppHeader from '../components/AppHeader';
import UserForm from '../components/userForm';

const SignInScreen: React.FC = () => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppHeader />
      <View style={styles.signIn}>
        <Text style={styles.header}>Sign In</Text>
        <UserForm />
        <View style={styles.footer}>
          <Text style={styles.footerText}>会員登録は</Text>
          <Button
            type="clear"
            titleStyle={[styles.footerText, { fontWeight: 'bold' }]}
            buttonStyle={{ padding: 0 }}
            title={'こちら'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signIn: {
    marginTop: 104,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  header: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    lineHeight: 20,
  },
});

export default SignInScreen;
