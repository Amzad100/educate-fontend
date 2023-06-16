import { useEffect, useState } from "react";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://educate-server-amzad100.vercel.app')
            .then(res => res.json())
            .then(data => {
                const popularInstructors = data.sort(
                    (a, b) => b.number_of_students - a.number_of_students
                );
                const topInstructors = popularInstructors.slice(0, 6);
                setInstructors(topInstructors)
            })
    }, [])
    return (
        <div className="mx-auto">
            <h1 className="text-center font-bold my-8 text-blue-600 text-5xl">Popular Instructors</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    instructors.map(instructor => <div className="card w-96 bg-blue-100 shadow-xl image-full" key={instructor._id}>
                        <figure><img className="w-96" src={instructor.instructor_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Instructor Name: {instructor.instructor_name}</h2>
                            <p>Number Of students: {instructor.number_of_students}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;