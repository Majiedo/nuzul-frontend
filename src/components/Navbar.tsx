import { Link } from "react-router-dom";
import Button from "./Button";

interface NavbarProps {
  onClick?: () => void;
}

const Navbar = ({ onClick }: NavbarProps) => {
  return (
    <nav className="py-4 border-b-2 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-4xl font-bold hover:cursor-pointer transition-all">
          Real Estate Property
        </h1>
      </Link>

      <Button onClick={onClick}> Create Property</Button>
    </nav>
  );
};

export default Navbar;
