import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { getAllBeers } from "../../services/beerServices";

const Home = () => {
	const [beers, setBeers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getAllBeers().then((res) => {
			setIsLoading(true);
			setBeers(res);
		});
	}, []);

	return (
		<div className="min-height-12">
			<h1 className="text-center">Welcome to beer app !</h1>
			<div className="d-flex justify-content-center">
				{isLoading ? (
					beers.slice(10, 15).map((x) => <Card beer={x} />)
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default Home;