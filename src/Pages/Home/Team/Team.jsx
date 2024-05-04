import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";

const Team = () => {
    return (
        <div>
            <div className='w-[400px] mx-auto text-center'>
                <p className='text-[#FF3811]'>Team</p>
                <h2 className='text-3xl font-bold my-3'>Meet Our Team</h2>
                <p className='mb-5'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="my-5">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={4000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable

                >
                    <div className="flex flex-col items-center gap-2 m-4 p-4 border rounded-lg">
                        <img className="rounded" src={team1} alt="" />
                        <h2 className="text-2xl font-medium">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="flex gap-5">
                        <FaFacebook className="text-[#0863f7] text-2xl" />
                        <FaTwitter className="text-[#1c96e8] text-2xl" />
                        <FaLinkedin className="text-[#0077af] text-2xl" />
                        </div>


                    </div>
                    <div className="flex flex-col items-center gap-2 m-4 p-4 border rounded-lg">
                        <img className="rounded" src={team2} alt="" />
                        <h2 className="text-2xl font-medium">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="flex gap-5">
                        <FaFacebook className="text-[#0863f7] text-2xl" />
                        <FaTwitter className="text-[#1c96e8] text-2xl" />
                        <FaLinkedin className="text-[#0077af] text-2xl" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 m-4 p-4 border rounded-lg">
                        <img className="rounded" src={team3} alt="" />
                        <h2 className="text-2xl font-medium">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="flex gap-5">
                        <FaFacebook className="text-[#0863f7] text-2xl" />
                        <FaTwitter className="text-[#1c96e8] text-2xl" />
                        <FaLinkedin className="text-[#0077af] text-2xl" />
                        </div>
                    </div>

                </Carousel>
            </div>
        </div >
    );
};

export default Team;