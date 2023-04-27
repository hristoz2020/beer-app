import { memo, useState } from "react";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { getAllBeers } from "../../services/beerServices";

const Home = () => {
	const [beers, setBeers] = useState([]);
	getAllBeers(1, 50).then((res) => setBeers(res));

	return (
		<div className="min-height-12  pt-5">
			<h1 className="text-center">Welcome to beer app !</h1>
			<div className="d-flex justify-content-center">
				{beers.length <= 0 && <Loader />}
				{beers.length > 0 &&
					beers
						.slice(10, 15)
						.map((x) => <Card key={x.id} beer={x} />)}
			</div>
		</div>
	);
};

export default memo(Home);
