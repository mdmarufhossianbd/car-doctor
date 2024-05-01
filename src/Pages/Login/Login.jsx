import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        const loginInfo = {email, password}
        console.log(loginInfo);
    }

    return (
        <div className="max-w-7xl mx-auto py-20">
            <div className="flex">
                <div className=" w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="border-2 rounded-md p-10 w-1/2">
                    <h1 className="text-5xl text-center mt-5 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className=" rounded py-2 font-medium hover:bg-black bg-[#FF3811] text-white">Sign In</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Or Sign In with</p>
                        <div className='flex justify-center gap-3 my-2'>
                            <FaFacebook className='text-4xl bg-black round p-2 rounded-full text-white' />
                            <FaLinkedin className='text-4xl bg-black round p-2 rounded-full text-white' />
                            <FaGoogle className='text-4xl bg-black round p-2 rounded-full text-white' />
                        </div>
                        <p className='py-2'>You Haven't an account? <Link className='text-[#ff3811] font-medium'>Sign Up</Link></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;