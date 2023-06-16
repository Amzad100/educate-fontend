import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { useState } from "react";

const Allusers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    // const [admin, setAdmin] = useState(false)
    // const [instructor, setInstructor] = useState(false)
    const handleMakeAdmin = user => {
        fetch(`https://educate-server-amzad100.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // setAdmin(true);
                }
            })

    }
    const handleMakeInstructor = user => {
        fetch(`https://educate-server-amzad100.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} is an instructor now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // setInstructor(true)
                }
            })

    }
    return (
        <div className="w-full">
            <Helmet>
                <title>EDUcate | AllUsers</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center text-blue-600">All users: {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : 'student'
                                    }
                                </td>
                                <td><button disabled={false} onClick={() => handleMakeInstructor(user)} className="btn btn-primary text-white">Make Instructor</button></td>
                                <td><button disabled={false} onClick={() => handleMakeAdmin(user)} className="btn btn-warning text-black">Make Admin</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;