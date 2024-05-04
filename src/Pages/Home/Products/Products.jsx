import { useEffect, useState } from "react";
import ServiceCard from "../Services/ServiceCard";

const Products = () => {

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
        <div className="my-10">
            <div className="w-[400px] mx-auto text-center mb-5">
                <h2 className="text-[#FF3811] text-xl">Polular Products</h2>
                <h2 className="text-3xl font-bold my-3">Browse Our Products</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
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

export default Products;