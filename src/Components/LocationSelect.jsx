import PopularCities from "./PopularCities";

function LocationSelect(props) {
    // Set default location to "Chennai" on component mount
    // props.locationselect("chennai");

    return (
        <div className="container py-28 flex justify-center items-center mt-[100px]">
            <div className="bg-white opacity-90 w-4/6 rounded-lg py-12">
                <div className="w-full flex justify-around">
                    <input 
                        className="ps-2 w-1/3 rounded-md border" 
                        type="text" 
                        placeholder="Enter Your CityName"
                        onChange={(e) => props.locationselect(e.target.value)}
                    />
                    <button className="text-red-700 bg-white  p-2 border-2 rounded-full">
                        Detect my Location
                    </button>
                </div>
                <PopularCities onCityClick={props.locationselect} />
            </div>
        </div>
    );
}

export default LocationSelect;
