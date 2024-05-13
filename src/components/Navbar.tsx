import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="py-4 border-b-2 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-4xl font-bold hover:cursor-pointer transition-all">
          Real Estate Property
        </h1>
      </Link>
      <Link to="/create">
        <Button> Create Property</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
