import { createContext, useEffect, useState, useMemo } from "react";

export const FavoriteBeerContext = createContext();

export const FavoriteBeersContext = ({ children }) => {
	const [favoriteBeers, setFavoriteBeers] = useState(localStorage.getItem("favoriteBeers") ? JSON.parse(localStorage.getItem("favoriteBeers")) : []);

	useEffect(() => {
		localStorage.setItem('favoriteBeers', JSON.stringify(favoriteBeers));
	}, [favoriteBeers]);

	const addBeer = (beer) => {
		setFavoriteBeers([...favoriteBeers, beer]);
	};

	const removeBeer = (beer) => {
		setFavoriteBeers(favoriteBeers.filter(b => b.id !== beer.id));
	};

	const value = useMemo(() => ({favoriteBeers, addBeer, removeBeer}), [favoriteBeers, addBeer, removeBeer]);

	return (
		<FavoriteBeerContext.Provider
			value={value}
		>
			{children}
		</FavoriteBeerContext.Provider>
	);
};