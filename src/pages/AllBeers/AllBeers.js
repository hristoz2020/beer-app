import { useState, useContext, memo } from "react";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { BeerContext } from "../../contexts/BeersContext";

const AllBeers = () => {
	const [searchInput, setSearchInput] = useState("");
	const { beers, favoriteBeers } = useContext(BeerContext);
	console.log(beers);
	const onSearch = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	const filtredBeers = beers.filter((beer) =>
		beer.name.toLowerCase().includes(searchInput.toLowerCase())
	);

	return (
		<div className="min-height-12">
			<div className="w-25 m-auto p-3">
				<label className="d-flex align-items-center">
					<i className="fa fa-search p-2 position-absolute"></i>
					<input
						type="text"
						className="form-control ps-4"
						value={searchInput}
						placeholder="Search beer..."
						onChange={(e) => onSearch(e)}
					/>
				</label>
			</div>
			{beers.length < 1 && <Loader />}
			<div className="d-flex flex-wrap justify-content-center pt-5">
				{filtredBeers.length > 0 &&
					filtredBeers.map((beer) => {
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
					})}
				{filtredBeers.length < 1 && <h1>Not found beer !</h1>}
			</div>
		</div>
	);
};

export default memo(AllBeers);
