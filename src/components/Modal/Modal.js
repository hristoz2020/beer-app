const Modal = ({ beer, handleCloseModal }) => {
	return (
		<div className="modal modal-dialog modal-dialog-centered">
			<div className="modal-content">
				<div className="modal-header">
					<h3 className="modal-title" id="staticBackdropLabel">
						Beer Details
					</h3>
					<button
						type="button"
						className="btn-close"
						aria-label="Close"
						onClick={handleCloseModal}
					></button>
				</div>
				<div className="modal-body d-flex">
					<div>
						<img
							src={beer.image_url}
							alt="beer"
							className="modal-img"
						/>
					</div>
					<div className="p-4">
						<h4>Name: {beer.name}</h4>
						<h5>Tagline: {beer.tagline}</h5>
						<h5>Description: {beer.description}</h5>
						<h5>
							First Brewed:
							{beer.first_brewed}
						</h5>
					</div>
				</div>
				<div className="modal-footer"></div>
			</div>
		</div>
	);
};

export default Modal;
