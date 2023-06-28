const Modal = ({ beer, handleCloseModal }) => (
<div className="modal modal-dialog-centered modal-dialog-scrollable w-75 h-50">
	  <div className="modal-content">
		<div className="modal-header text-center">
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
		<div className="modal-body">
		  <div className="row">
			<div className="col-md-4 d-flex justify-content-center">
			  <img src={beer.image_url} alt="beer" className="modal-img" />
			</div>
			<div className="col-md-8">
			  <h3 className="shadow p-3 mb-3 bg-light rounded">{beer.name}</h3>
			  <h4>{beer.tagline}</h4>
			  <h4>{beer.description}</h4>
			  <h4>First Brewed: {beer.first_brewed}</h4>
			  <h4>ph: {beer.ph}</h4>
			  <h4>Food Pairing:</h4>
			  <ul className="list-group list-group-flush">
				{beer.food_pairing.map((food, index) => (
				  <li className="list-group-item p-1" key={index}>
					<h5>{food}</h5>
				  </li>
				))}
			  </ul>
			  <h4 className="mt-3">{beer.brewers_tips}</h4>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  );

export default Modal;
