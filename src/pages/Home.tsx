import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Property, getProperties } from "../utils/api";
import List from "../components/List";
import Form from "../components/Form";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Property[]>([]);
  const [modal, setModal] = useState(false);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const response = await getProperties();
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <main>
      <Navbar onClick={() => setModal(true)} />
      {loading ? (
        <h1 className="text-center font-bold mt-2">Loading....</h1>
      ) : (
        <List data={data} />
      )}
      <Form
        isOpen={modal}
        setIsOpen={setModal}
        onSubmitFinish={fetchProperties}
      />
    </main>
  );
}
