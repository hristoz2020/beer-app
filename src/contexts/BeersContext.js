import { createContext, useEffect, useState } from "react";

export const BeerContext = createContext();

export const FavoriteBeersContext = ({ children }) => {
	const [favoriteBeers, setFavoriteBeers] = useState(
		localStorage.getItem("favoriteBeers")
			? JSON.parse(localStorage.getItem("favoriteBeers"))
			: []
	);

	useEffect(() => {
		localStorage.setItem("favoriteBeers", JSON.stringify(favoriteBeers));
	}, [favoriteBeers]);


	const addBeer = (beer) => {
		setFavoriteBeers([...favoriteBeers, beer]);
	};

	const removeBeer = (beer) => {
		setFavoriteBeers(favoriteBeers.filter((b) => b.id !== beer.id));
	};

	return (
		<BeerContext.Provider
			value={{ favoriteBeers, addBeer, removeBeer }}
		>
			{children}
		</BeerContext.Provider>
	);
};
