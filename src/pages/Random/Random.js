import { useEffect, useState } from "react";
import { getRandomBeer } from "../../services/beerServices";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

const Random = () => {
	const [beer, setBeer] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getRandomBeer().then((res) => {
            setIsLoading(true);
			setBeer(res);
		});
	}, []);

	return (
		<div className="min-height-12 mt-5 d-flex justify-content-center">
			{isLoading ? beer.map((x) => <Card beer={x} />) : <Loader />}
		</div>
	);
};

export default Random;
