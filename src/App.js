import { Routes, Route } from "react-router-dom";

import AllBeers from "./pages/AllBeers/AllBeers";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Random from "./pages/Random/Random";
import NotFound from "./pages/NotFound/NotFound";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { FavoriteBeersContext } from "./contexts/BeersContext";

function App() {
	return (
		<FavoriteBeersContext>
			<div className="App">
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/beers" element={<AllBeers />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/random" element={<Random />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</FavoriteBeersContext>
	);
}

export default App;
