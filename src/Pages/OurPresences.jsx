function OurPresences(props){
    const cityname=props.city;
    return(
        <div className="flex justify-center pt-20">
            <div>
                {cityname==="Coimbatore" ? <div> <h1>Our Presences On {cityname}</h1>
                </div> :<><h1 className="text-6xl pt-32">We Are Implementing Soon</h1></>}

            </div>
        </div>
    );
}
export default OurPresences