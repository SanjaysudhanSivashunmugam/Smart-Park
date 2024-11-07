import PopularCities from "./PopularCities";

function LocationSelect(props) {
    // Set default location to "Chennai" on component mount
    // props.locationselect("chennai");

    return (
        <div className="container py-28 flex justify-center">
            <div className="bg-blue-400 w-4/6 rounded-lg py-4">
                <div className="w-full flex justify-around">
                    <input 
                        className="ps-2 w-1/3 rounded-md" 
                        type="text" 
                        placeholder="Enter Your CityName"
                        onChange={(e) => props.locationselect(e.target.value)}
                    />
                    <button className="text-red-700 bg-white rounded-md p-2">
                        Detect my Location
                    </button>
                </div>
                <PopularCities onCityClick={props.locationselect} />
            </div>
        </div>
    );
}

export default LocationSelect;
