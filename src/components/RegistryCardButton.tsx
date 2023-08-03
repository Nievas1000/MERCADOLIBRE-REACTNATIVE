import type { NavigationProp } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
	type: string;
	navigation: NavigationProp<any>;
}

export const RegistryCardButton: React.FC<Props> = ({ type, navigation }) => {
	return (
		<View style={{ width: 80 }}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation?.navigate('Validation', { type });
				}}
			>
				<Text style={{ color: 'white' }}>Add</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#3483fa',
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 20,
		alignItems: 'center',
	},
});
