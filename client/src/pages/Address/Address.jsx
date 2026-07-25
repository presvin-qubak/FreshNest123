
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheck,
} from "react-icons/fa";
import "./Address.css";

const Address = () => {
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Presvin",
      phone: "+91 9876543210",
      address: "Main Road",
      city: "Kanyakumari",
      state: "Tamil Nadu",
      pincode: "629702",
      type: "Home",
      isDefault: true,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    type: "Home",
  });

  // Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update address
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setAddresses((prev) =>
        prev.map((address) =>
          address.id === editingId
            ? {
                ...address,
                ...formData,
              }
            : address
        )
      );

      setEditingId(null);
    } else {
      const newAddress = {
        id: Date.now(),
        ...formData,
        isDefault: addresses.length === 0,
      };

      setAddresses((prev) => [...prev, newAddress]);
    }

    setFormData({
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      type: "Home",
    });

    setShowForm(false);
  };

  // Edit
  const handleEdit = (address) => {
    setFormData({
      name: address.name,
      phone: address.phone,
      address: address.address,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      type: address.type,
    });

    setEditingId(address.id);
    setShowForm(true);
  };

  // Delete
  const handleDelete = (id) => {
    const updatedAddresses = addresses.filter(
      (address) => address.id !== id
    );

    setAddresses(updatedAddresses);
  };

  // Set default
  const handleSetDefault = (id) => {
    setAddresses((prev) =>
      prev.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  };

  return (
    <div className="address-page">

      {/* Header */}
      <div className="address-header">

        {/* Close */}
        <button
          className="address-close"
          onClick={() => navigate(-1)}
          aria-label="Close address"
        >
          ✕
        </button>

        <div className="address-header-icon">
          <FaMapMarkerAlt />
        </div>

        <h1>My Address</h1>

        <p>
          Manage your delivery addresses
        </p>

      </div>


      {/* Main Content */}
      <div className="address-container">

        {/* Add Address Button */}
        {!showForm && (
          <button
            className="add-address-btn"
            onClick={() => {
              setEditingId(null);

              setFormData({
                name: "",
                phone: "",
                address: "",
                city: "",
                state: "",
                pincode: "",
                type: "Home",
              });

              setShowForm(true);
            }}
          >
            <FaPlus />
            Add New Address
          </button>
        )}


        {/* Address Form */}
        {showForm && (
          <div className="address-form-card">

            <div className="form-title">
              <h2>
                {editingId
                  ? "Edit Address"
                  : "Add New Address"}
              </h2>

              <button
                className="form-close"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-grid">

                <div className="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>


                <div className="form-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                  />
                </div>


                <div className="form-group full-width">
                  <label>Address</label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House / Street / Area"
                    rows="3"
                    required
                  />
                </div>


                <div className="form-group">
                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                  />
                </div>


                <div className="form-group">
                  <label>State</label>

                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    required
                  />
                </div>


                <div className="form-group">
                  <label>Pincode</label>

                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                    required
                  />
                </div>


                <div className="form-group">
                  <label>Address Type</label>

                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Home">
                      Home
                    </option>

                    <option value="Work">
                      Work
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

              </div>


              <button
                type="submit"
                className="save-address-btn"
              >
                {editingId
                  ? "Update Address"
                  : "Save Address"}
              </button>

            </form>

          </div>
        )}


        {/* Address List */}
        <div className="address-list">

          {addresses.length === 0 ? (

            <div className="empty-address">

              <FaMapMarkerAlt />

              <h2>No Address Saved</h2>

              <p>
                Add your delivery address to continue
                shopping.
              </p>

            </div>

          ) : (

            addresses.map((item) => (

              <div
                className={`address-card ${
                  item.isDefault
                    ? "default-address"
                    : ""
                }`}
                key={item.id}
              >

                {/* Card Header */}
                <div className="address-card-header">

                  <div className="address-title">

                    <div className="address-icon">
                      <FaMapMarkerAlt />
                    </div>

                    <div>
                      <h3>{item.type}</h3>

                      {item.isDefault && (
                        <span className="default-badge">
                          Default
                        </span>
                      )}
                    </div>

                  </div>

                </div>


                {/* Address Details */}
                <div className="address-details">

                  <strong>
                    {item.name}
                  </strong>

                  <p>
                    {item.phone}
                  </p>

                  <p>
                    {item.address}
                  </p>

                  <p>
                    {item.city}, {item.state} -{" "}
                    {item.pincode}
                  </p>

                </div>


                {/* Actions */}
                <div className="address-actions">

                  {!item.isDefault && (
                    <button
                      className="default-btn"
                      onClick={() =>
                        handleSetDefault(item.id)
                      }
                    >
                      <FaCheck />
                      Set Default
                    </button>
                  )}

                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEdit(item)
                    }
                  >
                    <FaEdit />
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(item.id)
                    }
                  >
                    <FaTrash />
                    Delete
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
};

export default Address;

