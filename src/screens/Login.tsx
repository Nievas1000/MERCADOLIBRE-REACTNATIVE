import { StyleSheet, View } from 'react-native';
import { EmailLogin } from '../components/login/EmailLogin';
import { useLocation } from 'react-router-native';
import { PasswordLogin } from '../components/login/PasswordLogin';

export const Login: React.FC = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const queryValue = searchParams.get('type');
	return (
		<View style={styles.container}>
			{queryValue === 'password' ? (
				<PasswordLogin styles={styles} />
			) : (
				<EmailLogin styles={styles} />
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
