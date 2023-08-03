/* eslint-disable*/
import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../context/user';

export const useLogin = (navigation) => {
	const [error, setError] = useState('');
	const {
		password,
		username,
		setPassword,
		setUsername,
		setIsLogged,
		setEmail,
	} = useContext(UserContext);

	const login = async () => {
		try {
			const response = await axios.get('http://10.0.2.2:3001/login', {
				params: {
					username,
					password,
				},
			});
			if (
				response.status === 200 &&
				response.data.username !== null &&
				response.data.email !== null
			) {
				setUsername(response.data.username);
				setEmail(response.data.email);
				setIsLogged(true);
				navigation?.navigate('Home');
			} else {
				setError('There is no user with that username or email.');
			}
		} catch (error) {
			console.log(error);
			setError('There is no user with that username or email.');
		}
	};

	return { error, setPassword, login, username, password };
};
