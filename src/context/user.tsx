import { createContext, useState } from 'react';
import type { UserContextType } from '../types';

export const UserContext = createContext<UserContextType>(
	{} as UserContextType, // eslint-disable-line
);

interface Props {
	children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLogged, setIsLogged] = useState(false);

	const contextValue = {
		email,
		username,
		password,
		isLogged,
		setEmail,
		setUsername,
		setPassword,
		setIsLogged,
	};
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
};
