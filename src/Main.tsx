import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Login } from './screens/Login';
import { Registry } from './screens/Registry';
import { Validation } from './screens/Validation';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator, Stack } from './Navigator';

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
