import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [service, setService] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setService(data)
        })
    },[])

    return (
        <div className="mb-10">
            <div className='text-center my-20'>
                <p className="text-[#FF3811] font-medium text-xl">Service</p>
                <h2 className="font-bold text-5xl my-5">Our Service Area</h2>
                <p className="w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:px-4">
                {
                    service.map(service=> <ServiceCard key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;