import { NativeRouter } from 'react-router-native';
import { Main } from './src/Main';

const App: React.FC = () => {
	return (
		<NativeRouter>
			<Main />
		</NativeRouter>
	);
};

export default App;
