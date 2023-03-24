import { Link } from "react-router-dom";
import Open from "../../assets/sound/open-beer.mp3";

const Card = ({ beer }) => {
	let openSound = new Audio(Open);
	const openBeer = () => {
		openSound.play();
	};
	let description =
		beer.description.length > 90
			? beer.description.slice(0, 90).concat("...")
			: beer.description;

	return (
		<div className="card w-25 d-flex align-items-center m-4 border border-4">
			<img
				src={beer.image_url}
				className="beer-img p-4"
				alt="beer"
				onClick={openBeer}
			/>
			<div className="card-body">
				<h5 className="card-title">{beer.name}</h5>
				<p className="card-text">{description}</p>
				<Link to="/" className="btn btn-primary">
					Details
				</Link>
			</div>
		</div>
	);
};

export default Card;
