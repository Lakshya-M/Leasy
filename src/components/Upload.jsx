import React, { useState } from "react";

const Upload = ({ addProduct }) => {
  // Initialize formData in state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  // Handle change for text input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image change for file input
  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newProduct = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      price: formData.price,
      image: URL.createObjectURL(formData.image),
    };
  
    console.log("New Product: ", newProduct);  // Check if the new product is correct
  
    addProduct(newProduct);  // Add product to the list
  };
  

  return (
    <div className="page">
      <h1>Upload Your Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></input>
        <input
          type="number"
          name="price"
          placeholder="Price per day"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Upload;
