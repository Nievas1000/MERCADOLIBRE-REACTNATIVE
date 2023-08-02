import { Main } from './src/Main';
import { UserProvider } from './src/context/user';
import 'react-native-gesture-handler';

const App: React.FC = () => {
	return (
		<UserProvider>
			<Main />
		</UserProvider>
	);
};

export default App;
