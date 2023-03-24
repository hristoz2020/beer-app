import { useState, useEffect } from "react";
import { getAllBeers } from "../../services/beerServices";

const AllBeers = () => {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		getAllBeers().then((res) => setBeers(res));
	}, []);

	return (
		<div>
			{beers.map((x) => (
				<p>{x.name}</p>
			))}
		</div>
	);
};

export default AllBeers;
