import image from '../assets/login-banner.jpg';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';
import Signup from './Signup';

function Login({onsign}){

    return(
        <div className="container h-full mx-auto flex justify-center items-center min-h-screen">
           <div className="w-[1000px] h-[500px]  rounded-2xl shadow-2xl flex">
            <div className='w-[50%] '>
                <img className='w-full h-[500px] rounded-s-2xl' src={image} alt="" />
            </div>
            <div className='w-[50%] p-4  bg-stone-100 rounded-2xl'>
                <div className='flex justify-end'>
                <button className='px-4 py-2 border rounded-full font-semibold hover:bg-stone-50' onClick={onsign}>Sign up</button>
                </div>
                <div>
                    <h1 className='font-semibold mb-3 text-2xl'>Welcome back!</h1>
                    <p htmlFor="" className='text-gray-600 mb-5'>Enter your email and password</p>
                    <div>
                        <div className='flex mx-7 mb-6'>
                            <img src={emailIcon} className='w-14 h-12 border-2 px-1 rounded-s-lg bg-gray-100' alt=""  />
                            <input className='h-12 w-full border-2 border-s-0 rounded-e-lg' type="email" name="" id="" />
                        </div>
                        <div className='flex mx-7 mb-6'>
                            <img src={passwordIcon} className='w-[60px] h-12 border-2 p-1 rounded-s-lg bg-gray-100' alt=""  />
                            <input className='h-12 w-full border-2 border-s-0 rounded-e-lg' type="email" name="" id="" />
                        </div>
                        <div className='flex justify-end me-7 mb-4'>
                            <p className='text-red-600 font-medium'>Forget Password?</p>
                        </div>
                        <button className='ms-6 w-[420px] h-12 text-white font-semibold hover:bg-blue-500 rounded-full bg-blue-600'>Login</button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Login;