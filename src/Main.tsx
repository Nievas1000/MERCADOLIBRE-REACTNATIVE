import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Login } from './screens/Login';
import { Registry } from './screens/Registry';
import { Validation } from './screens/Validation';
import { Home } from './screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from './screens/Settings';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// eslint-disable-next-line
export type RootStackParamList = {
	Login: { type?: 'password' | 'email' };
	Registry: undefined;
	Validation: undefined;
	Home: undefined;
	Settings: undefined;
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const DrawerNavigator: React.FC = () => {
	return (
		<Drawer.Navigator screenOptions={{ headerShown: false }}>
			<Drawer.Screen name='Home' component={Home} />
			<Drawer.Screen name='Settings' component={Settings} />
		</Drawer.Navigator>
	);
};

export const Main: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#ffdb15' />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Login'
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name='Login' component={Login} />
					<Stack.Screen name='Registry' component={Registry} />
					<Stack.Screen name='Validation' component={Validation} />
					<Stack.Screen name='Home' component={DrawerNavigator} />
					<Stack.Screen name='Settings' component={DrawerNavigator} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
