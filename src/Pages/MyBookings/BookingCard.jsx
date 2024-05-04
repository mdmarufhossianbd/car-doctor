import PropTypes from 'prop-types';
const BookingCard = ({order, handleDelete, handleUpdateOrder}) => {
    console.log(order);
    const {_id, serviceImage, serviceName, servicePrice, date, status} = order;

    return (
        <div className="flex justify-between items-center text-xl font-medium py-5">
            <button onClick={() => handleDelete(_id)} className="bg-[#FF3811] text-white py-2 px-3 rounded">Delete</button>
            <img className="rounded-md" width='200px' src={serviceImage} alt="" />
            <p>{serviceName}</p>
            <p>$ {servicePrice}</p>
            <p>{date}</p>
            <div>
                {
                    status === 'confirm' ? <p className='bg-[#2dac4d] text-white py-2 px-3 rounded'> Order Confirmd</p> :
                    <button onClick={() => handleUpdateOrder(_id)} className="bg-[#FF3811] text-white py-2 px-3 rounded">Pending</button>
                }
            </div>
        </div>
    );
};

BookingCard.propTypes = {
    order: PropTypes.obj,
    handleDelete: PropTypes.func,
    handleUpdateOrder: PropTypes.func
}

export default BookingCard;