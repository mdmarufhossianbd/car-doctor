import { CiSearch } from 'react-icons/ci';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
const Navber = () => {

    const links = <>

        <NavLink className="hover:underline" to={'/'}>Home</NavLink>
        <NavLink className="hover:underline" to={'/about'}>About</NavLink>
        <NavLink className="hover:underline" to={'/services'}>Services</NavLink>
        <NavLink className="hover:underline" to={'/blog'}>Blog</NavLink>
        <NavLink className="hover:underline" to={'/contact'}>Contact</NavLink>
        <NavLink className="hover:underline" to={'/login'}>Login</NavLink>

    </>

    return (
        <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex gap-5 font-medium">
                {links}
            </div>
            <div className="navbar-end">
                <Link><button className='text-2xl'><MdOutlineShoppingBag /></button></Link>
                <Link><button className='text-2xl px-4 mr-2'><CiSearch /></button></Link>
                <Link><button className='border-2 border-red-500 py-2 px-4 text-xl font-semibold text-red-500 rounded'>Appoinment</button></Link>
            </div>
        </div>
    );
};

export default Navber;