import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from './screens/Settings';
import { Home } from './screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import type { RootStackParamList } from './types';

export const Drawer = createDrawerNavigator();
export const Stack = createStackNavigator<RootStackParamList>();

export const DrawerNavigator: React.FC = () => {
	return (
		<Drawer.Navigator screenOptions={{ headerShown: false }}>
			<Drawer.Screen name='HomeDrawer' component={Home} />
			<Drawer.Screen name='SettingsDrawer' component={Settings} />
		</Drawer.Navigator>
	);
};
