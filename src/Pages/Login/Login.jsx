import { useState } from "react";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handlePasswordVisible = () => {
        setPasswordVisible(!passwordVisible)
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
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
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;