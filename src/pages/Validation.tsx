import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-native';
import Constants from 'expo-constants';
import { RegistryContext } from '../context/registry';

export const Validation: React.FC = () => {
	const { email, setEmail } = useContext(RegistryContext);
	const navigate = useNavigate();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const queryValue = searchParams.get('type');
	console.log(email);
	return (
		<View
			style={{
				marginTop: Constants.statusBarHeight,
				padding: 20,
				paddingTop: 50,
			}}
		>
			<Text style={styles.title}>Enter your {queryValue}</Text>
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
