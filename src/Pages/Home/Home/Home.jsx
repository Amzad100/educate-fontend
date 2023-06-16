import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ProudSection from "../ProudSection/ProudSection";

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
                <ProudSection></ProudSection>
            </div>
        </div>
    );
};

export default Home;