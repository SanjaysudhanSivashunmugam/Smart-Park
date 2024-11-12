import Seat from "../Components/Seat";
import { useState } from "react";
import Parkimg from '../assets/parkimg.png';
function Booking(props) {
    const mall = props.mallSelected;
    // const numberOfSeats = [{ id: 1, isBooked: false, image: Parkimg }, { id: 2, isBooked: false, image: Parkimg },
    //      { id: 3, isBooked: false, image: Parkimg }, { id: 4, isBooked: false, image: Parkimg }];
    const generateSeats = (num) => {
        const seatsArray = [];
        for (let i = 1; i <= num; i++) {
            seatsArray.push({ id: i, isBooked: false, image: Parkimg });
        }
        return seatsArray;
    };

    const [seats, setSeats] = useState(generateSeats(3));


    const toggleBooking = (id) => {
        setSeats((prevSeats) =>
            prevSeats.map((seat) =>
                seat.id === id ? { ...seat, isBooked: !seat.isBooked } : seat
            )
        );
    };

    return (
        <div className="p-10">

            <div className="flex justify-evenly">
                <div>
                    <h2 className="text-3xl font-semibold  ">{mall.name}</h2>
                    <img
                        className="w-80 h-80 rounded-lg my-4"
                        src={mall.image}
                        alt={`${mall.name} image`}
                    />
                    <p className="w-96 font-semibold">Welcome to {mall.name}! Here you can find the best shopping experience in Coimbatore.</p>
                </div>
                <div>
                    <Seat seats={seats} bookseat={toggleBooking}/>
                </div>
            </div>
        </div>
    );
}

export default Booking;

