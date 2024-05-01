import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded object-cover h-[650px] " />
                <div className='absolute rounded bg-gradient-to-r from-[#151515] to-[#ffffff3a] pl-20 text-white w-full h-full mix-blend-plus-darker py-40 flex flex-col items-start gap-10'>
                    <h2 className='text-6xl font-bold lg:w-1/3 w-1/2 '>Affordable Price For Car Servicing</h2>
                    <p className='w-1/2 lg:w-1/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='font-medium border border-[#FF3811] bg-[#FF3811] py-2 px-3 rounded mr-7 hover:bg-transparent hover:border'>Discover More</button>
                        <button className='font-medium border rounded py-2 px-3 hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn bg-black btn-circle hover:bg-[#ff3811]"><FaArrowLeft className='text-white hover:text-black' /></a>
                    <a href="#slide2" className="btn bg-[#ff3811] hover:bg-black btn-circle"><FaArrowRight className='text-white hover:text-black' /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded object-cover h-[650px]" />
                <div className='absolute rounded bg-gradient-to-r from-[#151515] to-[#ffffff3a] pl-20 text-white w-full h-full mix-blend-plus-darker py-40 flex flex-col items-start gap-10'>
                    <h2 className='text-6xl font-bold lg:w-1/3 w-1/2 '>Affordable Price For Car Servicing</h2>
                    <p className='w-1/2 lg:w-1/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='font-medium border border-[#FF3811] bg-[#FF3811] py-2 px-3 rounded mr-7 hover:bg-transparent hover:border'>Discover More</button>
                        <button className='font-medium border rounded py-2 px-3 hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn bg-transparent btn-circle hover:bg-[#ff3811]"><FaArrowLeft className='text-white hover:text-black' /></a>
                    <a href="#slide3" className="btn bg-[#ff3811] hover:bg-black btn-circle"><FaArrowRight className='text-white hover:text-black' /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded object-cover h-[650px]" />
                <div className='absolute rounded bg-gradient-to-r from-[#151515] to-[#ffffff3a] pl-20 text-white w-full h-full mix-blend-plus-darker py-40 flex flex-col items-start gap-10'>
                    <h2 className='text-6xl font-bold lg:w-1/3 w-1/2 '>Affordable Price For Car Servicing</h2>
                    <p className='w-1/2 lg:w-1/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='font-medium border border-[#FF3811] bg-[#FF3811] py-2 px-3 rounded mr-7 hover:bg-transparent hover:border'>Discover More</button>
                        <button className='font-medium border rounded py-2 px-3 hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn bg-transparent btn-circle hover:bg-[#ff3811]"><FaArrowLeft className='text-white hover:text-black' /></a>
                    <a href="#slide4" className="btn bg-[#ff3811] hover:bg-black btn-circle"><FaArrowRight className='text-white hover:text-black' /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded object-cover h-[650px]" />
                <div className='absolute rounded bg-gradient-to-r from-[#151515] to-[#ffffff3a] pl-20 text-white w-full h-full mix-blend-plus-darker py-40 flex flex-col items-start gap-10'>
                    <h2 className='text-6xl font-bold lg:w-1/3 w-1/2 '>Affordable Price For Car Servicing</h2>
                    <p className='w-1/2 lg:w-1/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='font-medium border border-[#FF3811] bg-[#FF3811] py-2 px-3 rounded mr-7 hover:bg-transparent hover:border'>Discover More</button>
                        <button className='font-medium border rounded py-2 px-3 hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn bg-transparent btn-circle hover:bg-[#ff3811]"><FaArrowLeft className='text-white hover:text-black' /></a>
                    <a href="#slide5" className="btn bg-[#ff3811] hover:bg-black btn-circle"><FaArrowRight className='text-white hover:text-black' /></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded object-cover h-[650px]" />
                <div className='absolute rounded bg-gradient-to-r from-[#151515] to-[#ffffff3a] pl-20 text-white w-full h-full mix-blend-plus-darker py-40 flex flex-col items-start gap-10'>
                    <h2 className='text-6xl font-bold lg:w-1/3 w-1/2 '>Affordable Price For Car Servicing</h2>
                    <p className='w-1/2 lg:w-1/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='font-medium border border-[#FF3811] bg-[#FF3811] py-2 px-3 rounded mr-7 hover:bg-transparent hover:border'>Discover More</button>
                        <button className='font-medium border rounded py-2 px-3 hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn bg-transparent btn-circle hover:bg-[#ff3811]"><FaArrowLeft className='text-white hover:text-black' /></a>
                    <a href="#slide6" className="btn bg-[#ff3811] hover:bg-black btn-circle"><FaArrowRight className='text-white hover:text-black' /></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded object-cover h-[650px]" />
                <div className='absolute rounded bg-gradient-to-r from-[#151515] to-[#ffffff3a] pl-20 text-white w-full h-full mix-blend-plus-darker py-40 flex flex-col items-start gap-10'>
                    <h2 className='text-6xl font-bold lg:w-1/3 w-1/2 '>Affordable Price For Car Servicing</h2>
                    <p className='w-1/2 lg:w-1/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='font-medium border border-[#FF3811] bg-[#FF3811] py-2 px-3 rounded mr-7 hover:bg-transparent hover:border'>Discover More</button>
                        <button className='font-medium border rounded py-2 px-3 hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn bg-transparent btn-circle hover:bg-[#ff3811]"><FaArrowLeft className='text-white hover:text-black' /></a>
                    <a href="#slide1" className="btn bg-[#ff3811] hover:bg-black btn-circle"><FaArrowRight className='text-white hover:text-black' /></a>
                </div>
            </div>

        </div>
    );
};

export default Banner;