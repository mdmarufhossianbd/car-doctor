import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import img from '../../assets/images/login/login.svg';

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        
        createUser(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className="max-w-7xl mx-auto py-20">
            <div className="flex">
                <div className=" w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="border-2 rounded-md p-10 w-1/2">
                    <h1 className="text-5xl text-center mt-5 font-bold">Login now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
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
                            <button className=" rounded py-2 font-medium hover:bg-black bg-[#FF3811] text-white">Sign Up</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        
                        <p className='py-2'>Already Have an account? <Link to={'/login'} className='text-[#ff3811] font-medium'>Sign In</Link></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;