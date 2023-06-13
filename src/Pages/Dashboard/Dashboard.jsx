import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaWallet, FaChalkboardTeacher } from 'react-icons/fa';
import { SiGoogleclassroom } from "react-icons/si";
import useSelected from "../../Hooks/useSelected";

const Dashboard = () => {
    const [selected] = useSelected()
    const navLinkstyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'white' : 'black'
        }
    }
    return (
        <>
            <Helmet>
                <title>EDUcate | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to='/dashboard/userhome' style={navLinkstyle}><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to='/dashboard/myselectedclass' style={navLinkstyle}><FaShoppingCart></FaShoppingCart> My selected class
                            <span className="badge badge-info">+{selected.length || 0}</span>
                        </NavLink></li>
                        <li><NavLink to='/dashboard/myenrolledclass' style={navLinkstyle}><FaShoppingCart></FaShoppingCart> My Enrolled Classes</NavLink></li>
                        <li><NavLink to='/dashboard/history' style={navLinkstyle}><FaWallet></FaWallet> Payment History</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink style={navLinkstyle} to='/'><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink style={navLinkstyle} to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>
                        <li><NavLink style={navLinkstyle} to='/classes'><SiGoogleclassroom></SiGoogleclassroom> Classes</NavLink></li>

                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;