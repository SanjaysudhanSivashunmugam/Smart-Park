import { useCallback } from "react";
import PopularCities from "./PopularCities";

function LocationSelect(props) {
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    
    const debouncedLocationSelect = useCallback(
        debounce((value) => {
            props.locationselect(value);
        }, 1000), 
        []
    );

    const handleInputChange = (e) => {
        const cityName = e.target.value;
        debouncedLocationSelect(cityName);
    };

    return (
        <div className="container py-28 flex justify-center items-center mt-[100px]">
            <div className="bg-white opacity-90 w-4/6 rounded-lg py-12">
                <div className="w-full flex justify-around">
                    <input
                        className="ps-2 w-1/3 rounded-md border"
                        type="text"
                        placeholder="Enter Your CityName"
                        onChange={handleInputChange}
                    />
                    <button className="text-red-700 bg-white p-2 border-2 rounded-full">
                        Detect my Location
                    </button>
                </div>
                <PopularCities onCityClick={props.locationselect} />
            </div>
        </div>
    );
}

export default LocationSelect;
