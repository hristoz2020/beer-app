import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { getAllBeers } from "../../services/beerServices";

const Home = () => {
	const [beers, setBeers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getAllBeers().then((res) => {
			setIsLoading(false);
			setBeers(res);
		});
	}, []);

	return (
		<div className="min-height-12  pt-5">
			<h1 className="text-center">Welcome to beer app !</h1>
			<div className="d-flex justify-content-center">
				{isLoading && <Loader />}
				{beers.length > 0 && beers.slice(10, 15).map((x) => (
					<Card key={x.id} beer={x} />
				))}
			</div>
		</div>
	);
};

export default Home;
