import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import Button from "./Button";
import { removeProperty } from "../utils/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface ConfirmationProps {
  id: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Confirmation = ({ id, isOpen, setIsOpen }: ConfirmationProps) => {
  const navigate = useNavigate();

  const onClick = async () => {
    await removeProperty(id);
    setIsOpen(false);
    toast("Property deleted successfully", {
      icon: "🗑️",
    });
    navigate("/");
  };

  return (
    <Transition appear show={isOpen}>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-lg w-1/2">
            <DialogTitle className="font-bold text-lg">
              Are you sure?
            </DialogTitle>
            <Description>
              Are you sure you want to delete this property? This action cannot
              be undone.
            </Description>
            <Button
              onClick={onClick}
              className="bg-red-600 hover:bg-red-500 w-full"
            >
              Delete
            </Button>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Confirmation;
