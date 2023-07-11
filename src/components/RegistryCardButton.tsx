import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'react-router-native';

interface Props {
	type: string;
}

export const RegistryCardButton: React.FC<Props> = ({ type }) => {
	return (
		<View style={{ width: 80 }}>
			<TouchableOpacity style={styles.button}>
				<Link to={`/validation?type=${type}`}>
					<Text style={{ color: 'white' }}>Add</Text>
				</Link>
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
