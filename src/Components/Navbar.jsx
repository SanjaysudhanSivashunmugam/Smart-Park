
function Navbar(){
    return(
        <nav className="container flex justify-between mx-auto px-24 fixed top-0 py-3 items-center text-white z-10">
            <h1 className="text-3xl font-bold items-center">
            Aether<span className="text-blue-500">Learn</span>
            </h1>
            <ul className="flex ms-0 gap-10 items-center">
                <a href=""><li>Home</li></a>
                <a href=""><li>Courses</li></a>
                <a href=""><li>About Us</li></a>
                <a href=""><li>Testimonials</li></a>
                <button className="bg-white text-black px-4 py-2 rounded-full"><li>Contact Us</li></button>
            </ul>
        </nav>
    );
}

export default Navbar;