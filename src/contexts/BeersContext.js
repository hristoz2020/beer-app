import { createContext, useEffect, useState } from "react";
import { paginationBeers } from "../services/beerServices";

export const BeerContext = createContext();

export const FavoriteBeersContext = ({ children }) => {
	const [favoriteBeers, setFavoriteBeers] = useState(
		localStorage.getItem("favoriteBeers")
			? JSON.parse(localStorage.getItem("favoriteBeers"))
			: []
	);

	const [beers, setBeers] = useState(
		localStorage.getItem("beers")
			? JSON.parse(localStorage.getItem("beers"))
			: []
	);

	useEffect(() => {
		async function loadBeers() {
			const promises = [];
			for (let i = 1; i <= 5; i++) {
				promises.push(paginationBeers(i, 65));
			}
			const result = await Promise.all(promises);
			const flattenedResult = result.flat();
			setBeers(flattenedResult);
			localStorage.setItem("beers", JSON.stringify(flattenedResult));
		}
		loadBeers();
	}, []);

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
			value={{ beers, favoriteBeers, addBeer, removeBeer }}
		>
			{children}
		</BeerContext.Provider>
	);
};
