import { createContext, useContext, useState } from "react";

export const FaovriteBeerContext = createContext();

export const FavoriteBeersContext = ({ children }) => {
	const [favoriteBeers, setFavoriteBeers] = useState([]);
	const addBeer = (beer) => {
		setFavoriteBeers([...favoriteBeers, beer]);
	};

	const removeBeer = (beer) => {
		setFavoriteBeers(favoriteBeers.filter(b => b.id !== beer.id));
	};

	return (
		<FaovriteBeerContext.Provider
			value={{ favoriteBeers, addBeer, removeBeer }}
		>
			{children}
		</FaovriteBeerContext.Provider>
	);
};

export const useFavoriteBeers = () => {
	const favoriteBeersState = useContext(FaovriteBeerContext);

	return favoriteBeersState;
};
