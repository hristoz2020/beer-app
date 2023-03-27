import { useState } from "react";
import { Link } from "react-router-dom";
import Open from "../../assets/sound/open-beer.mp3";

const Card = ({ beer }) => {
	let openSound = new Audio(Open);
	const openBeer = () => {
		openSound.play();
	};
	const [isFavorite, setIsFavorite] = useState(false);
	const checkIsFavorite = isFavorite === false ? true : false;
	let description =
		beer.description.length > 90
			? beer.description.slice(0, 90).concat("...")
			: beer.description;

	const favoriteBeer = () => {
		setIsFavorite(checkIsFavorite);
        //
    };

	return (
		<div className="card w-25 h-25 d-flex align-items-center m-4 border border-4">
			<img
				src={beer.image_url}
				className="beer-img p-4"
				alt="beer"
				onClick={openBeer}
			/>
			<div className="card-body">
				<h5 className="card-title">{beer.name}</h5>
				<p className="mb-0">{description}</p>
				<div className="d-flex justify-content-between align-items-center">
					<Link to="/" className="btn btn-primary">
						Details
					</Link>
					<button className="border-0" onClick={favoriteBeer}>
						{checkIsFavorite ? (
							<i className="fa-regular fa-heart text-danger fs-3"></i>
						) : (
							<i className="fa-solid fa-heart text-danger fs-3"></i>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
