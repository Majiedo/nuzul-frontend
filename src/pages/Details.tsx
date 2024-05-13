import { Link, useParams } from "react-router-dom";
import { Property, getProperty } from "../utils/api";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/helper";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<Property>();

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

  useEffect(() => {
    fetchProperty();
  }, [id]);

  return (
    <main>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="mt-5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 14l-4 -4l4 -4" />
          <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
        </svg>
      </Link>
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
          <Button onClick={() => setModal(true)} className="w-1/3">
            Edit
          </Button>
          <Button className="bg-red-600 hover:bg-red-500 w-1/3">Delete</Button>
        </div>
      )}
      {data && (
        <Form
          isOpen={modal}
          setIsOpen={setModal}
          property={data}
          onSubmitFinish={fetchProperty}
        />
      )}
    </main>
  );
}
