import { FaGlobeAmericas, FaUserGraduate, FaUsers, FaRegBookmark } from "react-icons/fa";
const ProudSection = () => {
    return (
        <div className="my-5 max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-blue-600">We are proud</h1>
            <p className="text-center mt-3">You dont have to struggle alone, you have got our assistance and help</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
                <div className="space-y-2">
                    <FaUsers className="text-green-600 text-3xl"></FaUsers>
                    <p>100</p>
                    <p>Students Enrolled</p>
                </div>
                <div className="space-y-2">
                    <FaRegBookmark className="text-purple-600 text-3xl"></FaRegBookmark>
                    <p>20</p>
                    <p>Total Courses</p>
                </div>
                <div className="space-y-2">
                    <FaUserGraduate className="text-orange-600 text-3xl"></FaUserGraduate>
                    <p>100</p>
                    <p>Online learners</p>
                </div>
                <div className="space-y-2">
                    <FaGlobeAmericas className="text-blue-600 text-3xl"></FaGlobeAmericas>
                    <p>200</p>
                    <p>Foregin Followers</p>
                </div>
            </div>
        </div>
    );
};

export default ProudSection;