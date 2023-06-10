import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EDUcate | Home</title>
            </Helmet>
            <Slider></Slider>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;