import { Button, Text, TextInput, View } from 'react-native';
import type { ValidationProps } from '../../types';
import { useContext } from 'react';
import { UserContext } from '../../context/user';
import Constants from 'expo-constants';
import axios from 'axios';

export const PasswordValidation: React.FC<ValidationProps> = ({
	styles,
	navigation,
}) => {
	const { password, username, email, setPassword } = useContext(UserContext);

	const registryUser = async (): Promise<void> => {
		try {
			const response = await axios.post('http://10.0.2.2:3001/registry', {
				email,
				username,
				password,
			});
			if (response.status === 200) {
				navigation?.navigate('Home');
			}
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
