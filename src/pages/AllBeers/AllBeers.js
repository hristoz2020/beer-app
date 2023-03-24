import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { getAllBeers } from "../../services/beerServices";
import Loader from "../../components/Loader/Loader";

const AllBeers = () => {
	const [beers, setBeers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		getAllBeers().then((res) => {
			setIsLoading(false);
			setBeers(res);
		});
	}, []);

	const onSearch = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	let filtredBeers = beers.filter((beer) =>
		beer.name.toLowerCase().includes(searchInput.toLowerCase())
	);

	return (
		<>
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
			{isLoading ? (
				<Loader />
			) : (
				<div className="d-flex flex-wrap justify-content-center">
					{filtredBeers.length > 0 ? (
						filtredBeers.map((x) => <Card key={x.id} beer={x} />)
					) : (
						<h1>Not found beer !</h1>
					)}
				</div>
			)}
		</>
	);
};

export default AllBeers;
