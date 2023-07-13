import { StyleSheet } from 'react-native';
import { useLocation } from 'react-router-native';
import { EmailValidation } from '../components/validation/EmailValidation';
import { UsernameValidation } from '../components/validation/UsernameValidation';
import { PasswordValidation } from '../components/validation/PasswordValidation';

export const Validation: React.FC = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const queryValue = searchParams.get('type');
	if (queryValue === 'email') {
		return <EmailValidation styles={styles} />;
	}

	if (queryValue === 'username') {
		return <UsernameValidation styles={styles} />;
	}

	if (queryValue === 'password') {
		return <PasswordValidation styles={styles} />;
	}

	return null;
};

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 24,
	},
	input: {
		borderColor: '#f0f0f0',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 8,
		marginTop: 20,
		height: 40,
	},
});
