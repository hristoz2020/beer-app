import { useEffect, useState, useRef } from "react";
import { getRandomBeer } from "../../services/beerServices";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

const Random = () => {
	const [beer, setBeer] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
    const isFirstRender = useRef(true);

    const getBeer = async () => {
        setIsLoading(true);
        const res = await getRandomBeer();
        setBeer(res);
        setIsLoading(false);
    }
    
    useEffect(() => {
        if(isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        getBeer();
    }, []);


	return (
		<div className="min-height-12 pt-5 d-flex justify-content-center">
			{isLoading && <Loader />}
			{beer.length > 0 && <Card key={beer[0].id} beer={beer[0]} /> }
		</div>
	);
};

export default Random;