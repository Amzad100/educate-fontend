import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelected from "../Hooks/useSelected";

const ClassCard = ({ item }) => {
    const { _id, class_image, class_name, instructor_name, available_seats, number_of_students, price } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useSelected();
    const handleSelect = (item) => {
        console.log(item);
        if (user && user.email) {
            const selectedItem = { selectedItemId: _id, email: user.email, class_name, class_image, price, instructor_name, available_seats, number_of_students }
            fetch('http://localhost:5000/selecteds', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        } else {
            Swal.fire({
                title: 'please login to selected the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        navigate('/login', { state: { from: location } })
                    )
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={class_image} alt="Image" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{class_name}</h2>
                <p>Instructor Name: {instructor_name}</p>
                <p>Availeble Seats: {available_seats}</p>
                <p>Number Of Students: {number_of_students}</p>
                <p>Price: {price}</p>
                <button onClick={() => handleSelect(item)} className="btn bg-blue-600 text-white">select</button>
            </div>
        </div>
    );
};

export default ClassCard;