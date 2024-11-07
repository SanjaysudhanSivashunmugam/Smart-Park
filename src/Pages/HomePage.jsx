import OurPresences from "./OurPresences";
import LocationSelect from "../Components/LocationSelect";
import Navbar from "../Components/Navbar";
import { useState } from "react";

function HomePage() {
    const [isLocationMarked, setIsLocationMarked] = useState(false);
    // const [selectedLocation, setSelectedLocation] = useState("Coimbatore");
    const [yourLocation, setYourLocation] = useState("Enter your Location");

    // Function to update location
    const updateLocation = (location) => {
        // setSelectedLocation(location);
        setYourLocation(location);
        setIsLocationMarked(true);
    };

    // const cityname = "Coimbatore";

    return (
        <div>
            {/* <Background/> */}
            <Navbar city={yourLocation} />
            {!isLocationMarked && <LocationSelect locationselect={updateLocation} />}
            {isLocationMarked && <OurPresences city={yourLocation} />}
        </div>
    );
}

export default HomePage;
