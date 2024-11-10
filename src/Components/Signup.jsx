import image from '../assets/login-banner.jpg';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';

function Signup({onLog}){

    return(
        <div className="container h-full mx-auto flex justify-center items-center min-h-screen">
           <div className="w-[1000px] h-[500px]  rounded-2xl shadow-2xl flex">
            <div className='w-[50%] p-5 bg-stone-100 rounded-2xl'>
                <div>
                    <div className='flex justify-between'> 
                    <h1 className='font-semibold mb-3 ps-4 text-3xl'>Sign up</h1>
                    <button className='px-4 py-2 border rounded-full font-semibold hover:bg-stone-50' onClick={onLog} >Login</button>
                    </div>
                    <div>
                        <div className='flex mx-7 mb-4 flex-col '>
                            <label htmlFor="">Full Name</label>
                            <input className='h-12 w-full border-2 rounded-lg px-3' type="text" name="" id="" />
                        </div>
                        <div className='flex mx-7 mb-4 flex-col '>
                            <label htmlFor="">Email</label>
                            <input className='h-12 w-full border-2 rounded-lg px-3' type="email" name="" id="" />
                        </div>
                        <div className='flex mx-7 mb-4 flex-col'>
                            <label htmlFor="">Phone no</label>
                            <input className='h-12 w-full border-2 rounded-lg px-3' type="number" name="" id="" />
                        </div>
                        <div className='flex mx-7 mb-4 flex-col'>
                            <label htmlFor="">Password</label>
                            <input className='h-12 w-full border-2 rounded-lg px-3' type="password" name="" id="" />
                        </div>
                        <button className='ms-6 w-[420px] h-12 text-white font-semibold hover:bg-blue-500 rounded-full bg-blue-600'>Sign up</button>
                    </div>
                </div>
            </div>
            <div className='w-[50%] '>
                <img className='w-full h-[500px] rounded-s-2xl' src={image} alt="" />
            </div>
           </div>
        </div>
    );
}

export default Signup;