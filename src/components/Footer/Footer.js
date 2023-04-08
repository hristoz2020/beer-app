import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="p-3 bg-dark text-light">
			<div className="d-flex justify-content-between">
				<div>
					<span>LOGO</span>
				</div>
				<div className="copyright">
					<p>
						developed and maintained by{" "}
						<Link to="/">
							company
						</Link>
					</p>
				</div>
				<div>
					<ul className="d-flex gap-3 list-unstyled">
						<li>
							<Link to="https://github.com/hristoz2020">
								<i className="bi text-light bi-github"></i>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="bi text-light bi-twitter"></i>
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="bi text-light bi-linkedin"></i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
