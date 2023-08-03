import { StyleSheet } from 'react-native';
import { EmailValidation } from '../components/validation/EmailValidation';
import { UsernameValidation } from '../components/validation/UsernameValidation';
import { PasswordValidation } from '../components/validation/PasswordValidation';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'Validation'>;

export const Validation: React.FC<Props> = ({ route, navigation }) => {
	const { type } = route.params ?? {};
	if (type === 'email') {
		return <EmailValidation styles={styles} navigation={navigation} />;
	}

	if (type === 'username') {
		return <UsernameValidation styles={styles} navigation={navigation} />;
	}

	if (type === 'password') {
		return <PasswordValidation styles={styles} navigation={navigation} />;
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
