import PropTypes from 'prop-types';
const BookingCard = ({order, handleDelete}) => {
    console.log(order);
    const {_id, serviceImage, serviceName, servicePrice, date} = order;

    return (
        <div className="flex justify-between items-center text-xl font-medium py-5">
            <button onClick={() => handleDelete(_id)} className="bg-[#FF3811] text-white py-2 px-3 rounded">Delete</button>
            <img className="rounded-md" width='200px' src={serviceImage} alt="" />
            <p>{serviceName}</p>
            <p>$ {servicePrice}</p>
            <p>{date}</p>
            <button className="bg-[#FF3811] text-white py-2 px-3 rounded">Pending</button>
        </div>
    );
};

BookingCard.propTypes = {
    order: PropTypes.obj,
    handleDelete: PropTypes.func
}

export default BookingCard;