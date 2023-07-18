import { NativeRouter } from 'react-router-native';
import { Main } from './src/Main';
import { UserProvider } from './src/context/user';

const App: React.FC = () => {
	return (
		<UserProvider>
			<NativeRouter>
				<Main />
			</NativeRouter>
		</UserProvider>
	);
};

export default App;
