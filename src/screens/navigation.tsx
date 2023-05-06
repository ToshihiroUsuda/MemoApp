import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export type ScreenPropsList = {
  MemoList: { userId: string } | undefined;
  MemoDetail: { docId: string } | undefined;
  MemoEdit: { docId: string } | undefined;
  LogIn: undefined;
  SignIn: undefined;
};

export type MemoDetailScreenProps = StackScreenProps<ScreenPropsList, 'MemoDetail'>;
export type MemoEditScreenProps = StackScreenProps<ScreenPropsList, 'MemoEdit'>;
export type LogInScreenProps = StackScreenProps<ScreenPropsList, 'LogIn'>;
export type SignInScreenProps = StackScreenProps<ScreenPropsList, 'SignIn'>;

export const useScreenNavigation = () => useNavigation<NavigationProp<ScreenPropsList>>();
