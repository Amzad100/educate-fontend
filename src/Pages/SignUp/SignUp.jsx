import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const sevedUser = { name: data.name, email: data.email }
                        fetch('https://educate-server-amzad100.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(sevedUser)

                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'SignUp successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }
    const isSignUpDisabled = password !== confirmPassword;
    return (
        <>
            <Helmet>
                <title>EDUcate | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">SignUP now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-center mt-4 text-3xl font-bold">SignUP</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your name" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered w-full" />
                                    {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p role="alert">Password must be 6 Characters</p>}
                                    {errors.password?.type === 'pattern' && <p role="alert">Password must one number, one uppercase, one lowercase and one special Characters</p>}
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <div>
                                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" {...register("confirmPassword", { required: true })} placeholder="Confirm password" className="input input-bordered w-full" />
                                    {errors.confirmPassword && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={isSignUpDisabled} className="btn bg-blue-600 text-white" type="submit" value="SignUP" />
                            </div>
                            <SocialLogin></SocialLogin>
                            <p>Already have an account? <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;