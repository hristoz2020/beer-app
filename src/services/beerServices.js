export const getAllBeers = async () => {
	let response = await fetch("https://api.punkapi.com/v2/beers");
    let allBeers = response.json();
	return allBeers;
};
