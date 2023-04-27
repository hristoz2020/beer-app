import { baseUrl } from "../constants/constants";

export const getAllBeers = async (page, perPage) => {
	let response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`);
    let allBeers = response.json();
	return allBeers;
};

export const getSingleBeer = async (id) => {
	let response = await fetch(`${baseUrl}${id}`);
	let singleBeer = response.json();
	return singleBeer;
};

export const getRandomBeer = async () => {
	let response = await fetch(`${baseUrl}/random`);
	let randomBeer = response.json();
	return randomBeer;
};
