import { FaCalendarAlt, FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            {/* call to action */}
            <div className="bg-black flex items-center justify-around md:py-20 py-5 md:my-10 my-5  rounded lg:mx-0 mx-4 md:flex-row md:gap-0 gap-5 flex-col">
                <div className="text-white flex items-center gap-3">
                    <FaCalendarAlt className="text-2xl text-[#FF3811]" />
                    <div>
                        <p className="text-center">We are open monday-friday</p>
                        <h2 className="font-bold text-2xl">7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className="text-white flex items-center gap-3">
                    <FaPhoneVolume className="text-2xl text-[#FF3811]" />
                    <div>
                        <p className="text-center">Have a question? </p>
                        <h2 className="font-bold text-2xl">+2546 251 2658</h2>
                    </div>
                </div>
                <div className="text-white flex items-center gap-3">
                    <FaLocationDot className="text-2xl text-[#FF3811]" />
                    <div>
                        <p className="text-center">Need a repair? our address</p>
                        <h2 className="font-bold text-2xl">Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;