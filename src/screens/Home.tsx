import { View } from 'react-native';
import Constants from 'expo-constants';
import { NavBar } from '../components/Navbar';
import { CarouselPublis } from '../components/CarouselPublis';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../types';

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home: React.FC<{ navigation: HomeNavigationProp }> = ({
	navigation,
}) => {
	return (
		<View style={{ marginTop: Constants.statusBarHeight }}>
			<NavBar navigation={navigation} />
			<CarouselPublis />
		</View>
	);
};
