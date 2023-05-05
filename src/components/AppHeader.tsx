import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader: React.FC = () => {
  return (
    <View style={styles.appHeader}>
      <View style={styles.appHeaderInner}>
        <Text style={styles.appHeaderTitle}>MemoApp</Text>
        <Text style={styles.appHeaderText}>ログアウト</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#467FD3',
    color: '#fffffff',
    width: '100%',
    position: 'absolute',
    height: 104,
    justifyContent: 'flex-end',
  },
  appHeaderInner: {
    // backgroundColor: 'gray',
    alignItems: 'center',
  },
  appHeaderTitle: {
    color: '#ffffff',
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  appHeaderText: {
    position: 'absolute',
    right: 19,
    bottom: 8,
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
    lineHeight: 24,
  },
});

export default AppHeader;
