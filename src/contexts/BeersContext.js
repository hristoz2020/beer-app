import { createContext, useEffect, useState, useMemo } from "react";
import { getAllBeers } from "../services/beerServices";

export const BeerContext = createContext();

export const FavoriteBeersContext = ({ children }) => {
	const [favoriteBeers, setFavoriteBeers] = useState(
		localStorage.getItem("favoriteBeers")
			? JSON.parse(localStorage.getItem("favoriteBeers"))
			: []
	);
	const [beers, setBeers] = useState(
		localStorage.getItem("allBeers")
			? JSON.parse(localStorage.getItem("allBeers"))
			: []
	);

	useEffect(() => {
		localStorage.setItem("favoriteBeers", JSON.stringify(favoriteBeers));
	}, [favoriteBeers]);

	const getBeers = () => getAllBeers().then((res) => {
		setBeers(res);
		localStorage.setItem("allBeers", JSON.stringify(res));
	});

	useEffect(() => {
		getBeers();
		console.log('useEffect--->');
	}, []);

	const addBeer = (beer) => {
		setFavoriteBeers([...favoriteBeers, beer]);
	};

	const removeBeer = (beer) => {
		setFavoriteBeers(favoriteBeers.filter((b) => b.id !== beer.id));
	};

	const value = useMemo(
		() => ({ favoriteBeers, addBeer, removeBeer, beers }),
		[favoriteBeers, addBeer, removeBeer, beers]
	);
	
	console.log(beers);

	return (
		<BeerContext.Provider value={value}>{children}</BeerContext.Provider>
	);
};
