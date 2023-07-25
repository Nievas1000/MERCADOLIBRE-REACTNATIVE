import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Login } from './screens/Login';
import { Routes, Route } from 'react-router-native';
import { Registry } from './screens/Registry';
import { Validation } from './screens/Validation';
import { Home } from './screens/Home';

export const Main: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#ffdb15' />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/registry' element={<Registry />} />
				<Route path='/validation' element={<Validation />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
