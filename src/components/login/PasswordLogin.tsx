import { Button, Text, TextInput, View } from 'react-native';
import type { ValidationProps } from '../../types';
import { useNavigate } from 'react-router-native';
import { useContext } from 'react';
import { RegistryContext } from '../../context/registry';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

export const PasswordLogin: React.FC<ValidationProps> = ({ styles }) => {
	const { password, username, setPassword } = useContext(RegistryContext);
	const navigate = useNavigate();

	const login = async (): Promise<void> => {
		try {
			const response = await axios.get('http://10.0.2.2:3001/login', {
				params: {
					username,
					password,
				},
			});
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<View>
			<View>
				<Text style={styles.title}>Enter your password</Text>
			</View>
			<View
				style={{
					marginTop: 20,
					flexDirection: 'row',
					alignItems: 'center',
					padding: 5,
					borderColor: 'rgba(0,0,0,.1)',
					borderWidth: 1,
					borderRadius: 8,
				}}
			>
				<Feather name='user' size={24} color='#3483fa' />
				<View style={{ paddingLeft: 15 }}>
					<Text style={{ fontSize: 12 }}>{username}</Text>
					<Text
						style={{ color: '#3483fa', fontSize: 12 }}
						onPress={() => {
							navigate('/');
						}}
					>
						Change account
					</Text>
				</View>
			</View>
			<View style={{ paddingVertical: 40 }}>
				<Text style={{ paddingBottom: 5 }}>Password</Text>
				<TextInput
					secureTextEntry={true}
					value={password}
					onChangeText={setPassword}
					style={styles.input}
				/>
			</View>
			<Button
				onPress={() => {
					void login();
				}}
				disabled={password === ''}
				title='Login'
			/>
		</View>
	);
};
