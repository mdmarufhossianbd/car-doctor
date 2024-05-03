import PropTypes from 'prop-types'; // ES6
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {
    const {_id, img, price, title, } = service;
    return (
        <div className="p-3 border rounded-lg">
            <img className="rounded w-full h-[300px] object-cover" src={img} alt="" />
            <h2 className="py-3 text-xl font-medium">{title}</h2>
            <div className="flex justify-between items-center text-[#FF3811] font-bold">
                <p>Price : ${price}</p>
                <Link to={`/checkout/${_id}`}><FaArrowRight /></Link>
            </div>

        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object
}
export default ServiceCard;