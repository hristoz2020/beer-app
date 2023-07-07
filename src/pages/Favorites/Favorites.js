import { useContext } from "react";
import { BeerContext } from "../../contexts/BeersContext";
import Card from "../../components/Card/Card";

const Favorites = () => {
	const { favoriteBeers } = useContext(BeerContext);

	const displayBeers = favoriteBeers.map((beer) => {
		const beerIsFav = favoriteBeers.some(
			(favBeer) => favBeer.id === beer.id
		);

		return (
			<Card
				key={beer.id}
				beer={beer}
				favorite={true}
				beerIsFav={beerIsFav}
			/>
		);
	});

	return (
		<div className="min-height-12 pt-5">
			<h1 className="text-center">Favorites</h1>
			<div className="d-flex flex-wrap align-items-center justify-content-center">
				{displayBeers}
			</div>
		</div>
	);
};

export default Favorites;
