import { Button, Text, TextInput, View } from 'react-native';
import type { ValidationProps } from '../../types';
/* import { useNavigate } from 'react-router-native'; */
import { useContext } from 'react';
import { RegistryContext } from '../../context/registry';
import Constants from 'expo-constants';
import axios from 'axios';

export const PasswordValidation: React.FC<ValidationProps> = ({ styles }) => {
	const { password, username, email, setPassword } =
		useContext(RegistryContext);
	/* const navigate = useNavigate(); */

	const registryUser = async (): Promise<void> => {
		try {
			const response = await axios.post('http://10.0.2.2:3001/registry', {
				email,
				username,
				password,
			});
			console.log(response.status);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View
			style={{
				marginTop: Constants.statusBarHeight,
				padding: 20,
				paddingTop: 50,
			}}
		>
			<Text style={styles.title}>Choose your password</Text>
			<Text style={{ fontSize: 16, marginTop: 5 }}>
				Choose a password that is safe and do not forget it.
			</Text>
			<TextInput
				secureTextEntry={true}
				value={password}
				onChangeText={setPassword}
				style={styles.input}
			/>
			<View style={{ paddingTop: 20 }}>
				<Button
					disabled={password === ''}
					title='Create Account'
					onPress={() => {
						void registryUser();
					}}
				/>
			</View>
		</View>
	);
};
