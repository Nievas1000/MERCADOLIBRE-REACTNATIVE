import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigate } from 'react-router-native';

export const Registry: React.FC = () => {
	const navigate = useNavigate();
	return (
		<View>
			<Text style={styles.title}>
				Fill in the details to create your account
			</Text>
			<Button
				onPress={() => {
					navigate('/');
				}}
				title='Back'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontWeight: '600',
	},
});
