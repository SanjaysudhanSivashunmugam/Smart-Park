
function Navbar(props){
    const cityname=props.city;
    return(
        <nav className="container flex justify-between mx-auto px-24 fixed top-0 py-3 items-center text-white z-10 bg-orange-400">
            <h1 className="text-3xl font-bold items-center">
            Smart<span className="text-blue-500">Parking</span>
            </h1>
            <ul className="flex ms-0 gap-10 items-center">
                <a href=""><li>Home</li></a>
                <a href=""><li>{cityname}</li></a>
                <a href=""><li>About Us</li></a>
                <button className="bg-white text-black px-4 py-2 rounded-full"><li>Sign Out</li></button>
            </ul>
        </nav>
    );
}

export default Navbar;