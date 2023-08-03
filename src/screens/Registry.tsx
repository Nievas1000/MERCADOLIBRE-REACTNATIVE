import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { RegistryCards } from '../components/RegistryCards';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'Registry'>;

export const Registry: React.FC<Props> = ({ navigation }) => {
	return (
		<View style={{ marginTop: Constants.statusBarHeight }}>
			<View style={{ padding: 20 }}>
				<View style={{ paddingBottom: 50 }}>
					<AntDesign
						onPress={() => {
							navigation?.navigate('Login', { type: 'email' });
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
			<RegistryCards navigation={navigation} />
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontWeight: '600',
	},
});
