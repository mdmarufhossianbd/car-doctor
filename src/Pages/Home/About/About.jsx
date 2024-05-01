import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 h-[#300px] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 mt-10 border-8 border-white rounded shadow-2xl" />
                </div>
                <div className="lg:w-1/2">
                    <p className='font-medium text-xl text-[#FF3811]'>About Us</p>
                    <h1 className="text-5xl font-bold w-2/3">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="rounded bg-[#FF3811] btn text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;