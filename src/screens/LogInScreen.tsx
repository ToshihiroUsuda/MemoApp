import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, Input, Button } from '@rneui/themed';

import AppHeader from '../components/AppHeader';
import UserForm from '../components/userForm';

const LogInScreen: React.FC = () => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AppHeader />
      <View style={styles.logIn}>
        <Text style={styles.header}>Log In</Text>
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
  logIn: {
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

export default LogInScreen;
