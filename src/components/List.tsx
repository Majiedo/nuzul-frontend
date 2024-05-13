import { Property } from "../utils/api";
import Card from "./Card";

interface ListProps {
  data: Property[];
}

const List = ({ data }: ListProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 gap-x-3 my-4">
      {data.map((property) => (
        <Card key={property.id} {...property} />
      ))}
    </div>
  );
};

export default List;
