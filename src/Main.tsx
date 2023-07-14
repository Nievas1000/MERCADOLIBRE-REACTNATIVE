import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Login } from './pages/Login';
import { Routes, Route } from 'react-router-native';
import { Registry } from './pages/Registry';
import { Validation } from './pages/Validation';

export const Main: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#ffdb15' />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/registry' element={<Registry />} />
				<Route path='/validation' element={<Validation />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
