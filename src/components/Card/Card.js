import { useContext, useState, memo } from "react";
import { BeerContext } from "../../contexts/BeersContext";
import Modal from "../Modal/Modal";
import Open from "../../assets/sound/open-beer.mp3";
import Beer from "../../assets/images/beer_not_found.png";

const Card = ({ beer, favorite, beerIsFav }) => {
	const openSound = new Audio(Open);
	const openBeer = () => {
		openSound.play();
	};
	const { addBeer, removeBeer } = useContext(BeerContext);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleShowModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleRemoveBeer = () => {
		removeBeer(beer);
	};

	const handleAddBeer = () => {
		addBeer(beer);
	};

	const editText = (text, maxLength) =>
		text.length > maxLength ? text.slice(0, maxLength).concat("...") : text;
	const description = editText(beer.description, 70);
	const name = editText(beer.name, 21);
	const beerImg = beer.image_url === null ? Beer : beer.image_url;
	const handleFavorite = beerIsFav ? handleRemoveBeer : handleAddBeer;
	const handleFavoriteIcon = beerIsFav ? "fa-solid" : "fa-regular";

	return (
		<div className="card card-container d-flex align-items-center m-4 border border-4">
			<img
				src={beerImg}
				className="beer-img p-4"
				alt="beer"
				onClick={openBeer}
			/>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="mb-0">{description}</p>
				<div className="d-flex justify-content-between align-items-center pt-2">
					<button
						type="button"
						className="btn btn-primary"
						onClick={handleShowModal}
					>
						Details
					</button>

					{isModalOpen && (
						<div className="modal-background h-100 w-100">
							<Modal
								beer={beer}
								handleCloseModal={handleCloseModal}
							/>
						</div>
					)}

					{favorite && (
						<div className="border-none">
							<span onClick={handleFavorite}>
								<i
									className={`${handleFavoriteIcon} fa-heart text-danger fs-3`}
								></i>
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default memo(Card);
