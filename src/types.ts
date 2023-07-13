import type { TextStyle, ViewStyle } from "react-native";

export interface UserContextType {
	email: string;
	username: string;
	password: string;
	setEmail: (email: string) => void;
	setUsername: (username: string) => void;
	setPassword: (password: string) => void;
}

export interface ValidationProps {
	styles: {
		title: TextStyle;
		input: ViewStyle;
	};
}
