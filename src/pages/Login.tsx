import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigate } from 'react-router-native';

export const Login: React.FC = () => {
	const [username, setUsername] = useState('');
	const navigate = useNavigate();
	console.log(username);
	return (
		<View style={styles.container}>
			<View>
				<View>
					<Text style={styles.title}>Enter your phone, e-mail or username</Text>
				</View>
				<View style={{ paddingVertical: 40 }}>
					<Text style={{ paddingBottom: 5 }}>
						Telephone, e-mail or username
					</Text>
					<TextInput
						value={username}
						onChangeText={setUsername}
						style={styles.input}
					/>
				</View>
				<Button
					onPress={() => {
						navigate('/registry');
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
