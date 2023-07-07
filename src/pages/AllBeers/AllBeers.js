import { useState, useContext, memo, useMemo } from "react";
import { BeerContext } from "../../contexts/BeersContext";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import ReactPaginate from "react-paginate";

const AllBeers = () => {
	const [searchInput, setSearchInput] = useState("");
	const { beers, favoriteBeers } = useContext(BeerContext);

	const [pageNumber, setPageNumber] = useState(0);

	const [beersPerPage, setBeersPerPage] = useState(25);
	const pagesVisited = pageNumber * beersPerPage;

	const onSearch = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	const filtredBeers = useMemo(
		() =>
			beers.filter((beer) =>
				beer.name.toLowerCase().includes(searchInput.toLowerCase())
			),
		[beers, searchInput]
	);

	const displayBeers = filtredBeers
		.slice(pagesVisited, pagesVisited + beersPerPage)
		.map((beer) => {
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
		});

	const pagesCount = Math.ceil(filtredBeers.length / beersPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	function handleSelectChange(event) {
		setBeersPerPage(Number(event.target.value));
	}

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
				{filtredBeers.length > 0 && displayBeers}
				{filtredBeers.length < 1 && <h1>Not found beer !</h1>}
			</div>

			{filtredBeers.length > 0 && (
				<>
					<div className="d-flex justify-content-center align-items-center">
						<h4 className="mb-4 me-1 pb-1">Beers per page:</h4>
						<select
							value={beersPerPage}
							onChange={handleSelectChange}
							className="mb-4 p-1"
						>
							<option value="10">10</option>
							<option value="25">25</option>
							<option value="50">50</option>
						</select>
					</div>
					<div className="d-flex justify-content-center align-items-center flex-wrap">
						<ReactPaginate
							previousLabel={"Previous"}
							nextLabel={"Next"}
							pageCount={pagesCount}
							onPageChange={changePage}
							containerClassName={"paginationBttns"}
							previousLinkClassName={"previousBttn"}
							nextLinkClassName={"nextBttn"}
							disabledClassName={"paginationDisabled"}
							activeClassName={"paginationActive"}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default memo(AllBeers);
