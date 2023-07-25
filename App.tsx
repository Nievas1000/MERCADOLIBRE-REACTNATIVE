import { NativeRouter } from 'react-router-native';
import { Main } from './src/Main';
import { UserProvider } from './src/context/user';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
	return (
		<UserProvider>
			<NativeRouter>
				<NavigationContainer>
					<Main />
				</NavigationContainer>
			</NativeRouter>
		</UserProvider>
	);
};

export default App;
