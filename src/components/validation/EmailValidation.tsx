import { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { UserContext } from '../../context/user';
import Constants from 'expo-constants';
import type { ValidationProps } from '../../types';

export const EmailValidation: React.FC<ValidationProps> = ({
	styles,
	navigation,
}) => {
	const { email, setEmail } = useContext(UserContext);
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
						navigation?.navigate('Registry');
					}}
				/>
			</View>
		</View>
	);
};
