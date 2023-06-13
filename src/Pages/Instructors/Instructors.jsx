import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div className="max-w-7xl mx-auto my-5">
            <Helmet>
                <title>EDUcate | Instructors</title>
            </Helmet>
            <h1>This is instructors page</h1>
            <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-center">
                {
                    instructors.map(instructor => <div className="card w-96 bg-base-100 shadow-xl" key={instructor._id}>
                        <figure className="px-10 pt-10">
                            <img src={instructor.instructor_image} alt="Image" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{instructor.instructor_name}</h2>
                            <p>{instructor.instructor_email}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Instructors;