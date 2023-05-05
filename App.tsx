import React from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

import MemoListScreen from './src/screens/MemoListScreen';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MemoListScreen />
    </ThemeProvider>
  );
};

export default App;
