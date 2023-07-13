import { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { RegistryContext } from '../../context/registry';
import { useNavigate } from 'react-router-native';
import Constants from 'expo-constants';
import type { ValidationProps } from '../../types';

export const EmailValidation: React.FC<ValidationProps> = ({ styles }) => {
	const { email, setEmail } = useContext(RegistryContext);
	const navigate = useNavigate();
	return (
		<View
			style={{
				marginTop: Constants.statusBarHeight,
				padding: 20,
				paddingTop: 50,
			}}
		>
			<Text style={styles.title}>Enter your e-mail</Text>
			<Text style={{ fontSize: 16, marginTop: 5 }}>
				Make sure you have access to it
			</Text>
			<TextInput value={email} onChangeText={setEmail} style={styles.input} />
			<View style={{ paddingTop: 20 }}>
				<Button
					disabled={email === ''}
					title='Continue'
					onPress={() => {
						navigate('/registry');
					}}
				/>
			</View>
		</View>
	);
};
