import { Button, Text, TextInput, View } from 'react-native';
import Constants from 'expo-constants';
import { useContext } from 'react';
import { UserContext } from '../../context/user';
import type { ValidationProps } from '../../types';

export const UsernameValidation: React.FC<ValidationProps> = ({
	styles,
	navigation,
}) => {
	const { username, setUsername } = useContext(UserContext);

	return (
		<View
			style={{
				marginTop: Constants.statusBarHeight,
				padding: 20,
				paddingTop: 50,
			}}
		>
			<Text style={styles.title}>Choose how you want us to call you</Text>
			<Text style={{ fontSize: 16, marginTop: 5 }}>
				The name you choose will be seen by all the people who interact with you
				in Mercado Libre and Mercado Pago.
			</Text>
			<TextInput
				value={username}
				onChangeText={setUsername}
				style={styles.input}
			/>
			<View style={{ paddingTop: 20 }}>
				<Button
					disabled={username === ''}
					title='Continue'
					onPress={() => {
						navigation?.navigate('Registry');
					}}
				/>
			</View>
		</View>
	);
};
