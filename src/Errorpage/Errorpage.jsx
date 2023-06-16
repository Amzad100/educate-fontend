import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/zH77d1k/404.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-red-400 font-bold">OPPS! PAGE NOT BE FOUND</h1>
                    <p className="mb-5">Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>
                    <Link className="btn btn-error" to='/'>Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;