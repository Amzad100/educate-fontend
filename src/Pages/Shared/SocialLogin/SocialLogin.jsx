import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const sevedUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(sevedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log('error', error.message)
            });
    }
    return (
        <div>
            <button className='mt-2 btn btn-outline btn-info w-full' type='submit' onClick={handleGoogleSingIn}><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;