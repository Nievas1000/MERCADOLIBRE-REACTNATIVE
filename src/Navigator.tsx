import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from './screens/Settings';

const Drawer = createDrawerNavigator();

export const Navigator: React.FC = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Settings' component={Settings} />
		</Drawer.Navigator>
	);
};
