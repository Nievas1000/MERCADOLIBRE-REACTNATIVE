import { Button, Text, TextInput, View } from 'react-native';
import { useContext } from 'react';
import type { ValidationProps } from '../../types';
import { UserContext } from '../../context/user';

export const EmailLogin: React.FC<ValidationProps> = ({
	styles,
	navigation,
}) => {
	const { username, setUsername } = useContext(UserContext);
	return (
		<View>
			<View>
				<Text style={styles.title}>Enter your phone, e-mail or username</Text>
			</View>
			<View style={{ paddingVertical: 40 }}>
				<Text style={{ paddingBottom: 5 }}>Telephone, e-mail or username</Text>
				<TextInput
					value={username}
					onChangeText={setUsername}
					style={styles.input}
				/>
			</View>
			<Button
				onPress={() => navigation?.navigate('Login', { type: 'password' })}
				disabled={username === ''}
				title='Continue'
			/>
			<View
				style={{
					alignItems: 'center',
				}}
			>
				<Text
					onPress={() => navigation?.navigate('Registry')}
					style={{ color: '#3483fa', paddingTop: 20, fontSize: 15 }}
				>
					Create Account
				</Text>
			</View>
		</View>
	);
};
