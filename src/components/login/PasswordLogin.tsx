import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import type { ValidationProps } from '../../types';
import { Feather } from '@expo/vector-icons';
import { useLogin } from '../../hooks/useLogin';

export const PasswordLogin: React.FC<ValidationProps> = ({
	styles,
	navigation,
}) => {
	const { error, login, setPassword, username, password } =
		useLogin(navigation);
	return (
		<View>
			<View>
				<Text style={styles.title}>Enter your password</Text>
			</View>
			<View style={styles2.containerChange}>
				<Feather name='user' size={24} color='#3483fa' />
				<View style={{ paddingLeft: 15 }}>
					<Text style={{ fontSize: 12 }}>{username}</Text>
					<Text
						style={{ color: '#3483fa', fontSize: 12 }}
						onPress={() => {
							navigation?.navigate('Login');
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
			{error !== '' && (
				<Text style={{ color: 'red', paddingBottom: 10 }}>{error}</Text>
			)}
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

const styles2 = StyleSheet.create({
	containerChange: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 5,
		borderColor: 'rgba(0,0,0,.1)',
		borderWidth: 1,
		borderRadius: 8,
	},
});
