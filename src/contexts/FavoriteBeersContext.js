import { createContext } from "react";

export const AuthContext = createContext();

export const FavoriteBeersContext = ({ children }) => {
	const favoriteBeers = [];

	return (
		<AuthContext.Provider value={{favoriteBeers}}>
			{children}
		</AuthContext.Provider>
	);
};
