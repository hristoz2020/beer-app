import { Link } from "react-router-dom";

const Navigation = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1">
		<div className="container">
			<Link className="navbar-brand me-auto" to="/beer-app">
				Punk API
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ms-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/beer-app">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/favorites">
							Favorites
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/beers">
							Beers
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/random">
							Random Beer
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Navigation;
