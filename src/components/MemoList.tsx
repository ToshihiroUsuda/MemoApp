import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MemoList: React.FC = () => {
  return (
    <View style={styles.memoList}>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.itemTitle}>買い物リスト</Text>
          <Text style={styles.itemDate}>2023/5/5 10:00</Text>
        </View>
        <View style={styles.memoListDeleteButton}>
          <Text>X</Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.itemTitle}>買い物リスト</Text>
          <Text style={styles.itemDate}>2023/5/5 10:00</Text>
        </View>
        <View style={styles.memoListDeleteButton}>
          <Text>X</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  memoList: {
    marginTop: 104,
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
  memoListDeleteButton: {
    alignSelf: 'center',
    padding: 8,
  },
  itemTitle: {
    fontSize: 20,
    lineHeight: 32,
  },
  itemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});

export default MemoList;
