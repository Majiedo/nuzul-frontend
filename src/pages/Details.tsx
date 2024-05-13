import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Details() {
  const { id } = useParams();
  return (
    <main>
      <Navbar />
    </main>
  );
}
