import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const Allusers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    return (
        <div>
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
                            <th>Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Student</td>
                            <td><button className="btn btn-primary text-white">Make Instructor</button></td>
                            <td><button className="btn btn-warning text-black">Make Admin</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;