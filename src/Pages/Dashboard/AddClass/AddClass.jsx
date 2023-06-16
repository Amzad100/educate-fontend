import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClass = () => {
    const { user } = useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit } = useForm();
    // const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

    const onSubmit = data => {
        // const formData = new FormData();
        // formData.append('class_image', data.class_image[0])
        // fetch(img_hosting_url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgRes => {
        //         console.log(imgRes);
        //     })
        // axiosSecure.post('/menu', data)
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Class name</span>
                </label>
                <input type="text" {...register("class_name", { required: true })} placeholder="Class name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Class image</span>
                </label>
                <input type="text" {...register("class_image", { required: true })} placeholder="Class image" className="input input-bordered" />
            </div>
            <div className="form-control">
                {/* <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" {...register("class_image", { required: true })} className="file-input file-input-bordered  w-full" />
                </div> */}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Instructor name</span>
                </label>
                <input type="text" {...register("instructor_name", { required: true })} defaultValue={user?.displayName} placeholder="Instructor name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Instructor email</span>
                </label>
                <input type="text" {...register("instructor_email", { required: true })} defaultValue={user?.email} placeholder="Instructor email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available seats</span>
                </label>
                <input type="text" {...register("available_seats", { required: true })} placeholder="Available seats" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <select defaultValue="category" {...register("category", { required: true })} className="select select-bordered w-full">
                    <option disabled>Select Category?</option>
                    <option>Bangle</option>
                    <option>English</option>
                    <option>Math</option>
                    <option>ICT</option>
                </select>
            </div>

            <div className="form-control mt-6">
                <input className="btn bg-blue-600 text-white" type="submit" value="Add class" />
            </div>

        </form >
    );
};

export default AddClass;