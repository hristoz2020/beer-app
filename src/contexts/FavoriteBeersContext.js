import { createContext, useState } from "react";

export const FavoriteBeerContext = createContext();

export const FavoriteBeersContext = ({ children }) => {
	const [favoriteBeers, setFavoriteBeers] = useState([]);

	const addBeer = (beer) => {
		setFavoriteBeers([...favoriteBeers, beer]);
	};

	const removeBeer = (beer) => {
		setFavoriteBeers(favoriteBeers.filter(b => b.id !== beer.id));
	};

	return (
		<FavoriteBeerContext.Provider
			value={{ favoriteBeers, addBeer, removeBeer }}
		>
			{children}
		</FavoriteBeerContext.Provider>
	);
};