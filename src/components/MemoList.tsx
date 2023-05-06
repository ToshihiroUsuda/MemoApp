import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Button } from '@rneui/themed';

type MemeListItemProps = {
  title: string;
  subtitle: string;
};

const MemoListItem: React.FC<MemeListItemProps> = (props) => {
  const { title, subtitle } = props;

  return (
    <ListItem.Swipeable
      bottomDivider
      leftWidth={0}
      rightContent={(reset) => (
        <Button
          title="Delete"
          onPress={() => reset()}
          icon={{ name: 'delete', color: 'white' }}
          buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
        />
      )}
    >
      <ListItem.Content>
        <ListItem.Title style={styles.listTitle}>{title}</ListItem.Title>
        <ListItem.Subtitle style={styles.listSubtitle}>{subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};

const MemoList: React.FC = () => {
  return (
    <View style={styles.memoList}>
      <MemoListItem title={'やることリスト'} subtitle={'2023/5/5 10:00'} />
      <MemoListItem title={'やることリスト'} subtitle={'2023/5/5 10:00'} />
      <MemoListItem title={'やることリスト'} subtitle={'2023/5/5 10:00'} />
      <MemoListItem title={'やることリスト'} subtitle={'2023/5/5 10:00'} />
      <MemoListItem title={'やることリスト'} subtitle={'2023/5/5 10:00'} />
    </View>
  );
};

const styles = StyleSheet.create({
  memoList: {
    flex: 1,
    marginTop: 104,
  },
  listTitle: {
    fontSize: 20,
    lineHeight: 32,
  },
  listSubtitle: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});

export default MemoList;