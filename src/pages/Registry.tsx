import { StyleSheet, Text, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { RegistryCards } from '../components/RegistryCards';

export const Registry: React.FC = () => {
	const navigate = useNavigate();
	return (
		<View style={{ marginTop: Constants.statusBarHeight }}>
			<View style={{ padding: 20 }}>
				<View style={{ paddingBottom: 50 }}>
					<AntDesign
						onPress={() => {
							navigate('/');
						}}
						name='arrowleft'
						size={34}
						color='gray'
					/>
				</View>
				<Text style={styles.title}>
					Fill in the details to create your account
				</Text>
			</View>
			<RegistryCards />
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontWeight: '600',
	},
});
