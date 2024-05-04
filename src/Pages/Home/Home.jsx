import { FaCalendarAlt, FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Group38 from "../../assets/icons/Group 38729.svg";
import Wrench from "../../assets/icons/Wrench.svg";
import check from "../../assets/icons/check.svg";
import deliveryTime from "../../assets/icons/deliveryt.svg";
import Group from "../../assets/icons/group.svg";
import person from "../../assets/icons/person.svg";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Team from "./Team/Team";

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
            <Products></Products>
            <Team></Team>
            {/* why choose us */}
            <div className="my-20 lg:mx-0 mx-4">
                <div className="w-[400px] mx-auto text-center my-10">
                    <p className="text-[#FF3811] font-medium my-5">Core Features</p>
                    <p className="text-3xl font-bold my-3">Why Choose Us</p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <div className="lg:flex justify-center gap-4 mb-5 grid md:grid-cols-3 grid-cols-2">
                    <div className="p-5 border rounded hover:bg-[#FF3811] flex flex-col items-center justify-center">
                        <img src={Group} alt="" />
                        <p>Expert Team</p>
                    </div>
                    <div className="p-5 border rounded bg-[#FF3811]  text-white flex flex-col items-center justify-center">
                        <img className="text-center" src={Group38} alt="" />
                        <p>Expert Team</p>
                    </div>
                    <div className="p-5 border rounded hover:bg-[#FF3811] flex flex-col items-center justify-center">
                        <img src={person} alt="" />
                        <p>24/7 Support</p>
                    </div>
                    <div className="p-5 border rounded hover:bg-[#FF3811] flex flex-col items-center justify-center">
                        <img src={Wrench} alt="" />
                        <p>Best Equipment</p>
                    </div>
                    <div className="p-5 border rounded hover:bg-[#FF3811] flex flex-col items-center justify-center">
                        <img src={check} alt="" />
                        <p>100% Guranty</p>
                    </div>
                    <div className="p-5 border rounded hover:bg-[#FF3811] flex flex-col items-center justify-center">
                        <img src={deliveryTime} alt="" />
                        <p>Timely Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;