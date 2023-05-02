import { useContext, useState, memo } from "react";
import Open from "../../assets/sound/open-beer.mp3";
import { BeerContext } from "../../contexts/BeersContext";
import Modal from "../Modal/Modal";
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

	const description =
		beer.description.length > 70
			? beer.description.slice(0, 70).concat("...")
			: beer.description;
	const name =
		beer.name.length > 21
			? beer.name.slice(0, 21).concat("...")
			: beer.name;

	const beerImg = beer.image_url === null ? Beer : beer.image_url;

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
						<div className="modal-background">
							<Modal
								beer={beer}
								handleCloseModal={handleCloseModal}
							/>
						</div>
					)}

					{favorite && (
						<div className="border-none">
							{beerIsFav ? (
								<span
									onClick={() => {
										removeBeer(beer);
									}}
								>
									<i className="fa-solid fa-heart text-danger fs-3"></i>
								</span>
							) : (
								<span
									onClick={() => {
										addBeer(beer);
									}}
								>
									<i className="fa-regular fa-heart text-danger fs-3"></i>
								</span>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default memo(Card);
