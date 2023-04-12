import { useEffect, useState, useCallback } from "react";
import { getRandomBeer } from "../../services/beerServices";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

const Random = () => {
	const [beer, setBeer] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

    const getBeer = useCallback(async () => {
        setIsLoading(true);
        const res = await getRandomBeer();
        setBeer(res);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getBeer();
    }, [getBeer]);


	return (
		<div className="min-height-12 pt-5 d-flex justify-content-center">
			{isLoading && <Loader />}
			{beer.length > 0 && <Card key={beer[0].id} beer={beer[0]} /> }
		</div>
	);
};

export default Random;