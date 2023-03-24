import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { getAllBeers } from "../../services/beerServices";

const AllBeers = () => {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		getAllBeers().then((res) => setBeers(res));
	}, []);

	return (
		<div className="d-flex flex-wrap justify-content-center">
			{beers.map((x) => (
				<Card key={x.id} beer={x} />
			))}
		</div>
	);
};

export default AllBeers;
