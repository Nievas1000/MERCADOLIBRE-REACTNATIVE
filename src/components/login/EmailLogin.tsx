import { Button, Text, TextInput, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useContext } from 'react';
import type { ValidationProps } from '../../types';
import { RegistryContext } from '../../context/registry';

export const EmailLogin: React.FC<ValidationProps> = ({ styles }) => {
	const { username, setUsername } = useContext(RegistryContext);
	const navigate = useNavigate();
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
				onPress={() => {
					navigate('/login?type=password');
				}}
				disabled={username === ''}
				title='Continue'
			/>
			<View
				style={{
					alignItems: 'center',
				}}
			>
				<Text
					onPress={() => {
						navigate('/registry');
					}}
					style={{ color: '#3483fa', paddingTop: 20, fontSize: 15 }}
				>
					Create Account
				</Text>
			</View>
		</View>
	);
};
