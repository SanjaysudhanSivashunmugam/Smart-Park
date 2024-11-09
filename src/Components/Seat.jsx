function Seat({ seats, bookseat }) {
    return (
        <div className="grid grid-cols-5 gap-4">
            {seats.map((seat) => (
                <div
                    key={seat.id}
                    className={`w-24 h-24 rounded-lg cursor-pointer ${seat.isBooked ? 'bg-red-400' : 'bg-green-400'}`}
                    onClick={() => bookseat(seat.id)}
                >
                    <img
                        src={seat.image}
                        alt={`Seat ${seat.id}`}
                        className={`w-full h-full rounded-lg ${seat.isBooked ? 'opacity-50' : ''}`}
                    />
                </div>
            ))}
        </div>
    );
}

export default Seat;
