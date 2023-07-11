import { NativeRouter } from 'react-router-native';
import { Main } from './src/Main';
import { RegistryProvider } from './src/context/registry';

const App: React.FC = () => {
	return (
		<RegistryProvider>
			<NativeRouter>
				<Main />
			</NativeRouter>
		</RegistryProvider>
	);
};

export default App;
