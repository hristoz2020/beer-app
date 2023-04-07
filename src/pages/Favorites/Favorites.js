import { useFavoriteBeers } from "../../contexts/FavoriteBeersContext";
import Card from "../../components/Card/Card";

const Favorites = () => {
	const { favoriteBeers } = useFavoriteBeers();
	console.log(favoriteBeers);
	return (
		<div className="min-height-12">
			<h1 className="h-100 text-center">Favorites</h1>
			<div className="d-flex flex-wrap align-items-center justify-content-center">
				{favoriteBeers.map((beer) => {
					const beerIsFav = favoriteBeers.includes(beer);

					return (
						<Card
							key={beer.id}
							beer={beer}
							favorite={true}
							beerIsFav={beerIsFav}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Favorites;
