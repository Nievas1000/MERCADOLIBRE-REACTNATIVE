import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from './screens/Settings';
import { Home } from './screens/Home';

const Drawer = createDrawerNavigator();

export const Navigator: React.FC = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Home' component={Home} />
			<Drawer.Screen name='Settings' component={Settings} />
		</Drawer.Navigator>
	);
};
