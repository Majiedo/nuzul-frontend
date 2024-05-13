const BASE_URL = "https://6642099a3d66a67b3435ee69.mockapi.io";

export type Property = {
  createdAt: string;
  title: string;
  price: string;
  country: string;
  description: string;
  city: string;
  street: string;
  image: string;
  id: string;
};

const getProperties = async (): Promise<Property[]> => {
  const response = await fetch(`${BASE_URL}/properties`);
  const data = await response.json();
  return data;
};

const getProperty = async (id: string): Promise<Property> => {
  const response = await fetch(`${BASE_URL}/properties/${id}`);
  const data = await response.json();
  return data;
};

const addProperty = async (property: Property): Promise<Property> => {
  const response = await fetch(`${BASE_URL}/properties`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(property),
  });
  const data = await response.json();
  return data;
};

const updateProperty = async (property: Property): Promise<Property> => {
  const response = await fetch(`${BASE_URL}/properties/${property.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(property),
  });
  const data = await response.json();
  return data;
};

const removeProperty = async (id: string): Promise<void> => {
  await fetch(`${BASE_URL}/properties/${id}`, {
    method: "DELETE",
  });
};

export {
  getProperties,
  getProperty,
  addProperty,
  updateProperty,
  removeProperty,
};
