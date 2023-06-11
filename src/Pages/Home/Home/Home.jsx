import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EDUcate | Home</title>
            </Helmet>
            <Slider></Slider>
            <div className="max-w-7xl mx-auto">
                <PopularClass></PopularClass>
                <PopularInstructors></PopularInstructors>
                <h1>This is home</h1>
            </div>
        </div>
    );
};

export default Home;