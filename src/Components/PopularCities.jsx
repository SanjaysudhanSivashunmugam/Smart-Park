import placesImg from '../assets/placesimages/chennai.png';

function PopularCities({ onCityClick }) {
    return (
        <>
            <h2 className="flex justify-center p-4 font-semibold text-xl">
                Popular Cities
            </h2>
            <div className="container flex justify-around text-center">
                
                <a href="#" onClick={() => onCityClick("Coimbatore")}>
                    <div>
                        <img src={placesImg} alt="Coimbatore" />
                        <span>Coimbatore</span>
                    </div>
                </a>
                <a href="#" onClick={() => onCityClick("Chennai")}>
                    <div>
                        <img src={placesImg} alt="Chennai" />
                        <span>Chennai</span>
                    </div>
                </a>
                <a href="#" onClick={() => onCityClick("Madurai")}>
                    <div>
                        <img src={placesImg} alt="Madurai" />
                        <span>Madurai</span>
                    </div>
                </a>
                <a href="#" onClick={() => onCityClick("Tutukudi")}>
                    <div>
                        <img src={placesImg} alt="Tutukudi" />
                        <span>Tutukudi</span>
                    </div>
                </a>
                <a href="#" onClick={() => onCityClick("Salem")}>
                    <div>
                        <img src={placesImg} alt="Salem" />
                        <span>Salem</span>
                    </div>
                </a>
            </div>
            <div className="flex justify-center p-5">
                <a href="" className='hover:underline'><h2>View All Cities</h2></a>
            </div>
        </>
    );
}

export default PopularCities;
