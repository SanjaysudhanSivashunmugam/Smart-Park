import React, {useState} from "react";
import Login from "./login";
import Signup from "./Signup";
function Auth(){
    const [status, setStatus] = useState(true);
    const toggle = ()=>{
        setStatus(!status);
    }
    return(
        <div>
            {status ?( <Login onsign={toggle} />) : (<Signup onLog = {toggle} />)}
        </div>
    );
}

export default Auth;