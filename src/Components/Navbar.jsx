
function Navbar(props){
    const cityname=props.city;
    return(
        <nav className="container flex justify-between mx-auto px-24 top-0 py-3 items-center text-white z-10 fixed">
            <a href=""><h1 className="text-3xl font-bold items-center">
            Smart<span className="text-blue-500">Parking</span>
            </h1></a>
            <ul className="flex ms-0 gap-10 items-center">
                <a href="" className="hover:font-semibold"><li>Home</li></a>
                <a href="" className="hover:font-semibold"><li>{cityname}</li></a>
                <a href="" className="hover:font-semibold"><li>About Us</li></a>
                <button className="bg-white text-black px-4 py-2 rounded-full"><li>Sign Up</li></button>
            </ul>
        </nav>
    );
}

export default Navbar;