import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
  mode: 'light',
  components: {
    Button: {
      raised: true,
    },
  },
});

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignInScreen from './src/screens/SignInScreen';
import { ScreenPropsList } from './src/screens/navigation';

const Stack = createStackNavigator<ScreenPropsList>();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LogIn"
          screenOptions={{
            headerTitle: 'Memo App',
            headerStyle: {
              backgroundColor:
                theme.mode == 'light' ? theme.lightColors?.primary : theme.darkColors?.primary,
            },
            headerTitleStyle: { color: '#ffffff', fontSize: 24 },
            headerTintColor: '#ffffff',
            headerBackTitle: 'Back',
            headerBackTitleVisible: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}
        >
          <Stack.Screen name="MemoList" component={MemoListScreen} />
          <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
          <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
          <Stack.Screen
            name="LogIn"
            component={LogInScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
