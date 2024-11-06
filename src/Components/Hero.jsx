import "../index.css";
function Hero() {
    return (
        <div className="container mx-auto px-24 hero h-screen text-white flex items-center justify-center ">
            <div className="text-center max-w-[900px] brightness-100 flex-col">
            <h1 className="text-4xl font-bold pb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem!
            </h1>
            <p className="text-lg pb-6 ml-20 max-w-[700px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio dolore molestias porro qui, recusandae mollitia facilis aliquam cupiditate. Dignissimos ea autem quaerat provident quae temporibus ut dolores architecto excepturi officia?</p>
            <button className="bg-white text-black px-4 py-2 rounded-full">Explore More</button>
            </div>
           
        </div>
    );
}

export default Hero;