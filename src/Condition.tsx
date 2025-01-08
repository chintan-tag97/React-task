import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Condition() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    age: '',
    phone: '',
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError(''); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.id || !formData.age) {
      setError('Please fill in all fields.');
      return; // code execution will stop here (below code will not execute)
    }

    alert('Form Submit');
    console.log(formData);

    setFormData({
      name: '',
      id: '',
      age: '',
      phone: '',
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="p-4 border rounded shadow "
        onSubmit={handleSubmit}
        style={{ width: '300px' }}>
            <div className="text-center"><h2>Form</h2></div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter your Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder='Enter Name'
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Enter your ID:
          </label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder='Enter Id'
            value={formData.id}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Enter your Age:
          </label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder='Enter Age'
            value={formData.age}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder='Enter Phone'
            value={formData.phone}
            onChange={handleChange}
            className="form-control"/>

        </div>
        <div>
            
        </div>


        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Condition;
