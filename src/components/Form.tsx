import { z } from "zod";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { Property, addProperty, updateProperty } from "../utils/api";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
  price: z.string().min(0),
  country: z.string().min(3),
  city: z.string().min(3),
  street: z.string().min(3),
});

export type FormValues = z.infer<typeof formSchema>;

interface FormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  property?: Property;
  onSubmitFinish: () => void;
}

const Form = ({ isOpen, setIsOpen, property, onSubmitFinish }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: property
      ? {
          title: property.title,
          description: property.description,
          price: property.price,
          country: property.country,
          city: property.city,
          street: property.street,
        }
      : undefined,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    if (property) {
      await updateProperty(property.id, data);
      toast("Property updated successfully", {
        icon: "🏠",
      });
      setIsOpen(false);
      onSubmitFinish();
    } else {
      await addProperty(data);
      toast("Property added successfully", {
        icon: "🏠",
      });
      setIsOpen(false);
      onSubmitFinish();
    }
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
              {property ? "Edit Property" : "Create Property"}
            </DialogTitle>
            <Input {...register("title")} placeholder="title" />
            {errors.title && (
              <p className="text-red-400">{errors.title.message}</p>
            )}
            <Input {...register("description")} placeholder="description" />
            {errors.description && (
              <p className="text-red-400">{errors.description.message}</p>
            )}
            <Input {...register("price")} placeholder="price" type="number" />
            {errors.price && (
              <p className="text-red-400">{errors.price.message}</p>
            )}
            <Input {...register("country")} placeholder="country" />
            {errors.country && (
              <p className="text-red-400">{errors.country.message}</p>
            )}
            <Input {...register("city")} placeholder="city" />
            {errors.city && (
              <p className="text-red-400">{errors.city.message}</p>
            )}
            <Input {...register("street")} placeholder="street" />
            {errors.street && (
              <p className="text-red-400">{errors.street.message}</p>
            )}
            <Button onClick={handleSubmit(onSubmit)} className="w-full">
              {property ? "Edit" : "Create"}
            </Button>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Form;
