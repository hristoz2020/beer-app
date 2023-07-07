import { baseUrl } from "../constants/constants";

export const paginationBeers = async (page, perPage) => {
	let response = await fetch(
		`${baseUrl}?page=${page}&per_page=${perPage}`
	);

	return response.json();
};

export const getSingleBeer = async (id) => {
	let response = await fetch(`${baseUrl}${id}`);

	return response.json();
};

export const getRandomBeer = async () => {
	let response = await fetch(`${baseUrl}/random`);

	return response.json();
};
