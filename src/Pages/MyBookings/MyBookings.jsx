import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import myOrder from '../../assets/images/checkout/checkout.png';
import BookingCard from "./BookingCard";


const MyBookings = () => {

    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])

    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBooking(data)
            })
    }, [url])

    // order delete
    const handleDelete = id => {
        const prossed = confirm('Are you want to delete it!')
        if (prossed) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
                const remainingOrder = booking.filter(booking => booking._id !== id)
                setBooking(remainingOrder)
        }
    }

    const handleUpdateOrder = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PATCH",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status : 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.matchedCount > 0){
                const remaining = booking.filter(booking => booking._id !== id);
                const updated = booking.find(booking => booking.id === id);
                updated.status = 'confirm'
                const newBooking = [updated, ...remaining];
                setBooking(newBooking);
            }
        })
    }

    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className='flex justify-center items-center flex-col relative '>
                <img className='w-full' src={myOrder} alt="" />
                <div className='absolute w-full h-full text-4xl font-bold text-white bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg flex items-center pl-20'>
                    <h2>My Order</h2>
                </div>
                <div className='absolute flex items-center justify-center bottom-0 text-white font-medium border-b-[50px] border-b-[#FF3811] border-x-[40px] border-x-transparent w-[250px]'>
                    <h2 className='absolute top-3'>Home/Orders</h2>
                </div>
            </div>
            {
                booking.length == 0 ?
                <div className=" text-center text-xl mt-10">You have no order.</div> : 
                <div className="mt-10">
                    {
                        booking?.map(order => <BookingCard
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleUpdateOrder={handleUpdateOrder}
                        ></BookingCard>)

                    }
                </div>
            }
            
        </div>
    );
};

export default MyBookings;