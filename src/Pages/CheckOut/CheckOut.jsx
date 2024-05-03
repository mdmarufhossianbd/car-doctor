import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import checkOut from '../../assets/images/checkout/checkout.png';

const CheckOut = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)

    const {title, price, img} = service;

    const handleOrderConfirm = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = user.email;
        const message = form.message.value;
        const serviceName = title;
        const servicePrice = price;
        const serviceImage = img;
        const order = {name, date, phone, email, message, serviceName, servicePrice, serviceImage}
        console.log(order);

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("Your Order confirm")
            }
            console.log(data);
        })

    }

    return (
        <div className='max-w-7xl mx-auto my-20 '>
            <div className='flex justify-center items-center flex-col relative '>
                <img className='w-full' src={checkOut} alt="" />
                <div className='absolute w-full h-full text-4xl font-bold text-white bg-gradient-to-r from-[#151515] to-[#15151500] rounded-lg flex items-center pl-20'>
                    <h2>Check Out</h2>
                </div>
                <div className='absolute flex items-center justify-center bottom-0 text-white font-medium border-b-[50px] border-b-[#FF3811] border-x-[40px] border-x-transparent w-[250px]'>
                    <h2 className='absolute top-3'>Home/Checkout</h2>
                </div>
            </div>
            <div className='my-10 flex justify-center gap-10'>
                <h2 className='text-3xl'>Your Selected Item : {title}.</h2>
                <p className='text-3xl'>Price : ${price}</p>
            </div>
            <div className='bg-[#F3F3F3] my-20 rounded-lg'>
                <form onSubmit={handleOrderConfirm} className='md:p-10'>
                    <div className='grid grid-cols-2 gap-5'>
                        <input className='w-full py-2 pl-4 rounded' type="text" name="name" placeholder='Full Name' id="" />
                        <input className='w-full py-2 pl-4 rounded' type="date" name="date" id="" />
                        <input className='w-full py-2 pl-4 rounded' type="number" name="phone" placeholder='Your Phone' id="" />
                        <input className='w-full py-2 pl-4 rounded' type="email" defaultValue={user?.email} name="email" placeholder='Your Email' id="" />
                    </div>
                    <div>
                        <textarea className='w-full my-5 rounded p-4' name="message" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                    </div>
                    <input className='w-full bg-[#FF3811] text-white font-medium py-2 rounded hover:bg-black hover:cursor-pointer hover:text-white' type="submit" value="Order Confirm" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;