import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface ImageProps {
	id: number;
	source: any;
}

export const CarouselPublis: React.FC = () => {
	const images: ImageProps[] = [
		{ id: 1, source: require('../../assets/homeSlider1.png') },
		{ id: 2, source: require('../../assets/homeSlider2.png') },
		{ id: 3, source: require('../../assets/homeSlider3.png') },
	];

	const renderItem = ({ item }: { item: ImageProps }): JSX.Element => {
		return (
			<View style={styles.slide}>
				<Image source={item.source} style={styles.image} />
			</View>
		);
	};
	return (
		<Carousel
			data={images}
			renderItem={renderItem}
			sliderWidth={Dimensions.get('window').width}
			itemWidth={Dimensions.get('window').width - 40}
			loop={true}
			autoplay={true}
			autoplayInterval={3000}
		/>
	);
};

const styles = StyleSheet.create({
	carouselContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	slide: {
		width: Dimensions.get('window').width - 40,
		height: 200,
		borderRadius: 8,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
