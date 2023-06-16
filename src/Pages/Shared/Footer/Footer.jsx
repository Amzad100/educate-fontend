import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <Link className="btn text-xl"><span className="text-blue-600 font-bold text-3xl">EDU</span>cate</Link>
                    <p>Educate.<br />Since 2023</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/instructors' className="link link-hover">Instructors</Link>
                    <Link to='/classes' className="link link-hover">Classes</Link>
                    <Link to='/dashboard' className="link link-hover">Dashboard</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Subscribe</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn bg-[#2563eb] text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Educate.</p>
                </div>
            </div>
        </footer>


    );
};

export default Footer;