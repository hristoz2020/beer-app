import { memo, useContext } from "react";
import { BeerContext } from "../../contexts/BeersContext";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

const Home = () => {
	const { beers } = useContext(BeerContext);

	const displayBeers = beers.slice(10, 15).map((x) => (
		<div className="col-md-4 justify-content-center d-flex" key={x.id}>
			<Card beer={x} />
		</div>
	));

	return (
		<div className="min-height-12  pt-5">
			<h1 className="text-center">Welcome to beer app !</h1>
			<div className="d-flex justify-content-center">
				{beers.length <= 0 && <Loader />}
				{beers.length > 0 && (
					<div className="row d-flex justify-content-center">
						{displayBeers}
					</div>
				)}
			</div>
		</div>
	);
};

export default memo(Home);
