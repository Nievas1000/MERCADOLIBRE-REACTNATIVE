import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export const CarouselPublis: React.FC = () => {
	const width = Dimensions.get('window').width;
	const images = [
		require('../../assets/homeSlider1.png'),
		require('../../assets/homeSlider2.png'),
		require('../../assets/homeSlider3.png'),
	];
	return (
		<View style={{ flex: 1 }}>
			<Carousel
				loop
				width={width}
				height={width / 2}
				autoPlay={true}
				data={images}
				scrollAnimationDuration={1000}
				renderItem={({ item }) => (
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
						}}
					>
						<Image
							source={item}
							style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
						/>
					</View>
				)}
			/>
		</View>
	);
};
