import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const FavoriteBeersContext = ({ children }) => {
	const favoriteBeers = [];

	return (
		<AuthContext.Provider value={{favoriteBeers}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useFavoriteBeers = () => {
    const favoriteBeersState = useContext(AuthContext);

    return favoriteBeersState;
}