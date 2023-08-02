import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { DrawerActions, type NavigationProp } from '@react-navigation/native';

interface Props {
	navigation?: NavigationProp<any>;
}

export const NavBar: React.FC<Props> = ({ navigation }) => {
	const handleMenuPress = (): void => {
		navigation?.dispatch(DrawerActions.openDrawer());
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleMenuPress}>
				<Feather name='menu' size={24} color='black' />
			</TouchableOpacity>
			<TextInput
				style={styles.input}
				placeholder='Search in Mercado Libre'
				placeholderTextColor='gray'
			/>
			<View style={styles.cartIconContainer}>
				<Feather name='shopping-cart' size={24} color='black' />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: '#ffdb15',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		backgroundColor: '#FFFFFF',
		width: '80%',
		marginLeft: 12,
		borderRadius: 16,
		padding: 6,
	},
	cartIconContainer: {
		marginLeft: 'auto',
	},
});
