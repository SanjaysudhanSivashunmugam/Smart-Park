import CoimbatoreMallsList from "../Components/CoimbatoreMallsList";
import BrookefieldsImage from "../assets/mallimages/Brookefields.jpg";
import FunImage from "../assets/mallimages/fun.jpg";
import ProzoneImage from "../assets/mallimages/prozone.jpg";

function OurPresences(props) {
    const cityname = props.city;
    const coimbatoreList = [
        { id: 1, name: "Brookefields Mall", image: BrookefieldsImage },
        { id: 2, name: "Prozone Mall", image: ProzoneImage },
        { id: 3, name: "Fun Republic Mall", image: FunImage }
    ];

    return (
        <div className=" pt-20">
            <div>
                {cityname === "Coimbatore" ? (
                    <div  >
                        <div className="flex justify-center m-7 text-2xl"><h1>Our Presences in {cityname}</h1></div>
                        <div className="flex justify-around"><CoimbatoreMallsList items={coimbatoreList} /></div>
                        
                    </div>
                ) : (
                    <h1 className="text-6xl pt-32">We Are Implementing Soon</h1>
                )}
            </div>
        </div>
    );
}

export default OurPresences;
