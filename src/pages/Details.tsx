import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Property, getProperty } from "../utils/api";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/helper";
import Button from "../components/Button";

export default function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Property>();

  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      try {
        const response = await getProperty(id!);
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  return (
    <main>
      <Navbar />
      {loading || data == null ? (
        <h1 className="text-center font-bold mt-2">Loading....</h1>
      ) : (
        <div className="w-full flex items-start flex-col mt-10 space-y-2">
          <img
            src={data.image}
            className="w-full h-96 object-cover rounded-md"
            alt="property"
          />
          <p className="text-sm text-black/40">{formatDate(data.createdAt)}</p>
          <h1 className="font-bold text-2xl">{data.title}</h1>
          <p className="text-black/50">{data.description}</p>
          <span>{data.price}$</span>
          <span>
            {data.country} - {data.city} - {data.street}
          </span>
          <Button className="bg-red-600 hover:bg-red-500">Delete</Button>
        </div>
      )}
    </main>
  );
}
