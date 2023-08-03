import { View, Text, StyleSheet } from 'react-native';

export const Settings: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text>Settings</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
});
