import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useSelected from "../../../Hooks/useSelected";
import { Link } from "react-router-dom";

const SelectedClass = () => {
    const [selected, refetch] = useSelected();
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selecteds/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>EDUcate | SelectedClass</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center text-blue-600">My Selected Class</h1>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selected.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.class_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.class_name}</td>
                                <td>$ {item.price}</td>
                                <td><Link to='/dashboard/payment'><button className="btn btn-primary text-white">Pay</button></Link></td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-warning text-black">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;