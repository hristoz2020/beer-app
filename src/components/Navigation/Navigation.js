import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg text-light bg-dark">
			<Link className="navbar-brand text-light" to="/">
				Punk API
			</Link>

			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="nav-link text-light" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-light" to="/favorites">
							Favorites
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-light" to="/beers">
							Beers
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-light" to="/random">
							Random Beer
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
