import { Link } from "react-router-dom";

const Footer = () => (
	<footer className="bg-dark text-light">
		<div className="p-2 d-flex justify-content-between align-items-center">
			<div>
				<span>PUNK API</span>
			</div>
			<div className="copyright">
				<span>© All rights reserved</span>
			</div>
			<div>
				<span>
					<Link to="https://github.com/hristoz2020">
						<i className="bi text-light bi-github"></i>
					</Link>
				</span>
			</div>
		</div>
	</footer>
);

export default Footer;
