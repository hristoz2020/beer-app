import { baseUrl } from "../constants/constants";

export const getAllBeers = async () => {
	let response = await fetch(`${baseUrl}`);
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
