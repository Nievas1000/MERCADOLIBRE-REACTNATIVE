import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from '../context/user';
import { RegistryCardButton } from './RegistryCardButton';
import type { NavigationProp } from '@react-navigation/native';

interface Props {
	navigation: NavigationProp<any>;
}

export const RegistryCards: React.FC<Props> = ({ navigation }) => {
	const { email, username } = useContext(UserContext);
	return (
		<View style={{ padding: 15 }}>
			<View style={[styles.container, { elevation: email === '' ? 8 : 0 }]}>
				<AntDesign name='mail' size={24} color='#3483fa' />
				<View style={{ flex: 1, paddingLeft: 15 }}>
					<Text style={{ fontSize: 16 }}>Add your email</Text>
					<Text style={{ color: 'rgba(0,0,0,.55)' }}>
						You will receive information about your account
					</Text>
				</View>
				{email === '' && (
					<RegistryCardButton type='email' navigation={navigation} />
				)}
			</View>

			<View
				style={[
					styles.container,
					{ elevation: email !== '' && username === '' ? 8 : 0 },
				]}
			>
				<AntDesign name='idcard' size={24} color='#3483fa' />
				<View style={{ flex: 1, paddingLeft: 15 }}>
					<Text style={{ fontSize: 16 }}>Choose your name</Text>
					<Text style={{ color: 'rgba(0,0,0,.55)' }}>
						Tell us how you want to be contact
					</Text>
				</View>
				{email !== '' && username === '' && (
					<RegistryCardButton type='username' navigation={navigation} />
				)}
			</View>

			<View
				style={[
					styles.container,
					{ elevation: email !== '' && username !== '' ? 8 : 0 },
				]}
			>
				<AntDesign name='lock' size={24} color='#3483fa' />
				<View style={{ flex: 1, paddingLeft: 15 }}>
					<Text style={{ fontSize: 16 }}>Create your password</Text>
					<Text style={{ color: 'rgba(0,0,0,.55)' }}>
						Keep your account safe
					</Text>
				</View>
				{email !== '' && username !== '' && (
					<RegistryCardButton type='password' navigation={navigation} />
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#fff',
		borderRadius: 6,
	},
});
