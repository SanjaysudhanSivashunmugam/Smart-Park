import { useState } from "react";
import CoimbatoreMallsList from "../Components/CoimbatoreMallsList";
import BrookefieldsImage from "../assets/mallimages/Brookefields.jpg";
import FunImage from "../assets/mallimages/fun.jpg";
import ProzoneImage from "../assets/mallimages/prozone.jpg";
import Booking from "./Booking";


function OurPresences(props) {
    const cityname = props.city;
    const coimbatoreList = [
        { id: 1, name: "Brookefields Mall", image: BrookefieldsImage },
        { id: 2, name: "Prozone Mall", image: ProzoneImage },
        { id: 3, name: "Fun Republic Mall", image: FunImage }
    ];
    const [isMallSelect, setMallSelect] = useState(false);
    const [MallSelected,setMallSelected] = useState();
    const MallSelect = (mall) =>{
        setMallSelect(true);
        setMallSelected(mall);

    }

    return (
        <div className=" pt-20">
            <div>
                {cityname === "Coimbatore" ? (
                    <div  >
                        {!isMallSelect ?(
                            <div>
                            <div className="flex justify-center m-7 text-3xl text-white font-bold"><h1>Our Presences in {cityname}</h1></div>
                            <div className="flex justify-around" ><CoimbatoreMallsList items={coimbatoreList} mallselect={MallSelect} /></div>
                        </div>
                        ):(
                            <Booking mallSelected={MallSelected}/>
                        )}
                        
                    </div>
                ) : (
                    <h1 className="text-center pb-96 pt-48 text-7xl text-white font-bold">We Are Implementing Soon :)</h1>
                )}
            </div>
        </div>
    );
}

export default OurPresences;
