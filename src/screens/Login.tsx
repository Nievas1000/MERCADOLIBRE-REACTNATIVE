import { StyleSheet, View } from 'react-native';
import { EmailLogin } from '../components/login/EmailLogin';
import type { StackScreenProps } from '@react-navigation/stack';
import { PasswordLogin } from '../components/login/PasswordLogin';
import type { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

export const Login: React.FC<Props> = ({ route, navigation }) => {
	const { type } = route.params ?? {};
	return (
		<View style={styles.container}>
			{type === 'password' ? (
				<PasswordLogin styles={styles} navigation={navigation} />
			) : (
				<EmailLogin styles={styles} navigation={navigation} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontWeight: '600',
		color: 'rgba(0,0,0,.8)',
	},
	input: {
		borderColor: '#f0f0f0',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 4,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
});
