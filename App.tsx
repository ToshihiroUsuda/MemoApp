import React from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

// import MemoListScreen from './src/screens/MemoListScreen';
// import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <MemoListScreen /> */}
      {/* <MemoDetailScreen /> */}
      <MemoEditScreen />
    </ThemeProvider>
  );
};

export default App;
