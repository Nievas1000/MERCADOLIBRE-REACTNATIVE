import { View } from 'react-native';
import Constants from 'expo-constants';
import { NavBar } from '../components/Navbar';
import { CarouselPublis } from '../components/CarouselPublis';

export const Home: React.FC = () => {
	return (
		<View style={{ marginTop: Constants.statusBarHeight }}>
			<NavBar />
			<CarouselPublis />
		</View>
	);
};
