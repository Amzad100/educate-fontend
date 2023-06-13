import { useEffect, useState } from "react";

const PopularClass = () => {
    const [classes, setclasses] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const popularClasses = data.sort(
                    (a, b) => b.number_of_students - a.number_of_students
                );
                const topClasses = popularClasses.slice(0, 6);
                setclasses(topClasses)
            })
    }, [])
    return (
        <div className="mx-auto">
            <h1 className="text-center font-bold my-8 text-blue-600 text-5xl">Popular Class</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-center">
                {
                    classes.map(item => <div className="card w-96 bg-blue-500 shadow-xl image-full" key={item._id}>
                        <figure><img src={item.class_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.class_name}</h2>
                            <p>{item.instructor_name}</p>
                            <p>{item.number_of_students}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClass;