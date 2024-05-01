import PropTypes from 'prop-types'; // ES6
import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({service}) => {
    const {img, price, title, } = service;
    return (
        <div className="p-3 border rounded-lg">
            <img className="rounded w-full h-[300px] object-cover" src={img} alt="" />
            <h2 className="py-3 text-xl font-medium">{title}</h2>
            <div className="flex justify-between items-center text-[#FF3811] font-bold">
                <p>Price : ${price}</p>
                <FaArrowRight />
            </div>

        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object
}
export default ServiceCard;