import { Link } from "react-router-dom";
import { Property } from "../utils/api";
import Button from "./Button";

interface CardProps extends Property {}

const Card = ({ title, id, image, price, country }: CardProps) => {
  return (
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
      <Link to={`/${id}`}>
        <Button className="px-2 py-1 mt-2">View Property</Button>
      </Link>
    </div>
  );
};
export default Card;
