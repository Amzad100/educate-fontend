import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'LogOut successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => console.log(error));
    }
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"><span className="text-blue-600 font-bold text-3xl">EDU</span>cate</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><div className="avatar">
                        <div className="w-12 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} />
                        </div>
                    </div></> : <></>
                }
                <div className="ml-3">
                    {
                        user ? <> <button onClick={handleLogOut} className="btn bg-[#2563eb] text-white">Logout</button></> :
                            <><Link to='/login' className="btn bg-[#2563eb] text-white">Login</Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;