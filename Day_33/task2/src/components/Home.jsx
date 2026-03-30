// Create Address Form:
// 1. Build a form component to input address details (Name, Street, City, State, Zip Code).
// 2. Include a submit button to add the address.


// Manage Addresses:
// 1. Use state to keep track of addresses.
// 2. Implement CRUD operations:
// ⦁ Create: Add new addresses to state and save to LocalStorage.
// ⦁ Read: Retrieve addresses from LocalStorage and display them.
// ⦁ Update: Allow editing of existing addresses.
// ⦁ Delete: Remove addresses from state and LocalStorage.


import React, { useState, useEffect } from "react";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const [addresses, setAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("addresses");
    if (stored) {
      setAddresses(JSON.parse(stored));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...addresses];
      updated[editIndex] = formData;
      setAddresses(updated);
      localStorage.setItem("addresses", JSON.stringify(updated));
      setEditIndex(null);
    } else {
      const updated = [...addresses, formData];
      setAddresses(updated);
      localStorage.setItem("addresses", JSON.stringify(updated));
    }

    setFormData({
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  const handleDelete = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
    localStorage.setItem("addresses", JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    setFormData(addresses[index]);
    setEditIndex(index);
  };

  return (
    <div >
      <h1>Address Manager</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">
          {editIndex !== null ? "Update Address" : "Add Address"}
        </button>
      </form>

      <h2>Saved Addresses</h2>

      {addresses.length === 0 ? (
        <p>No addresses found</p>
      ) : (
        <table border="1" cellPadding="20" cellSpacing="5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((addr, index) => (
              <tr key={index}>
                <td>{addr.name}</td>
                <td>{addr.street}</td>
                <td>{addr.city}</td>
                <td>{addr.state}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  {" "}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;