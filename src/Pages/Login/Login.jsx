import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handlePasswordVisible = () => {
        setPasswordVisible(!passwordVisible)
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }
    return (
        <>
            <Helmet>
                <title>EDUcate | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleLogin} className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-center mt-4 text-3xl font-bold">Login</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" required name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div>
                                    <input type={passwordVisible ? "text" : 'password'} name="password" required placeholder="password" className="input input-bordered w-full" />
                                    <span onClick={handlePasswordVisible} className="mt-2 border-2 p-3 rounded-lg btn">{passwordVisible ? 'Hide Password' : 'Show Password'}</span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-blue-600 text-white" type="submit" value="Login" />
                            </div>
                            <p>Are you new to here? <Link className="text-blue-600 font-bold" to='/signup'>SignUP</Link></p>
                        </div>
                    </form>
                </div>
            </div>

        </>

    );
};

export default Login;