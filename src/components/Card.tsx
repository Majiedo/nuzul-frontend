import { Link } from "react-router-dom";
import { Property } from "../utils/api";

interface CardProps extends Property {}

const Card = ({ title, id, image, price, country }: CardProps) => {
  return (
    <Link to={`/${id}`} className="cursor-pointer">
      <div className="bg-white rounded-md p-4 space-y-2">
        <img
          src={image}
          className="w-full h-48 object-cover rounded-md"
          alt="property"
        />
        <h1 className="font-bold">{title}</h1>
        <div className="flex items-center justify-between">
          <span>{price}$</span>
          <span className=" text-ellipsis w-1/2 whitespace-nowrap overflow-hidden text-right">
            {country}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default Card;
