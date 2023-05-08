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
		async function getBeers() {
			let response = [];
			for (let i = 1; i <= 5; i++) {
				response.push(paginationBeers(i, 65));
			}
			response = await Promise.all(response);
			const flattenedResult = response.flat();
			setBeers(flattenedResult);
			localStorage.setItem("beers", JSON.stringify(flattenedResult));
		}
		getBeers();
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
