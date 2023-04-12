import { Link } from "react-router-dom";

const Navigation = () => (
	<nav className="navbar navbar-expand-lg text-light bg-dark p-2">
		<div className="">
			<Link className="navbar-brand text-light" to="/">
				Punk API
			</Link>
		</div>

		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav mr-auto">
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

export default Navigation;