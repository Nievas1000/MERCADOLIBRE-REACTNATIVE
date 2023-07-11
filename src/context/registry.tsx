import { createContext, useState } from 'react';
import type { UserContextType } from '../types';

export const RegistryContext = createContext<UserContextType>(
	{} as UserContextType, // eslint-disable-line
);

interface Props {
	children: React.ReactNode;
}

export const RegistryProvider: React.FC<Props> = ({ children }) => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const contextValue = {
		email,
		username,
		password,
		setEmail,
		setUsername,
		setPassword,
	};
	return (
		<RegistryContext.Provider value={contextValue}>
			{children}
		</RegistryContext.Provider>
	);
};
