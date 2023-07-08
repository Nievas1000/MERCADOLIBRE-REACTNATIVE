import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Login } from './pages/Login';
import { Routes, Route } from 'react-router-native';
import { Registry } from './pages/Registry';

export const Main: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#ffdb15' />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/registry' element={<Registry />} />
			</Routes>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});
