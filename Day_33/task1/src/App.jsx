// Create a form with following fields in react js:
// First name
// Last Name
// Email
// DOB
// Password
// Confirm Password
// And a submit button.


import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [allSubmissions, setAllSubmissions] = useState([]);
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const storedSubmissions = localStorage.getItem('submissions');
    if (storedSubmissions) {
      setAllSubmissions(JSON.parse(storedSubmissions));
    }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newErrors = {};
    
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!dob.trim()) {
      newErrors.dob = 'Date of birth is required';
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }
    
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Password and confirm password should be the same.';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      const data = {
        firstName,
        lastName,
        email,
        dob,
        password: '',
        confirmPassword: '',
      };
      setSubmittedData([...submittedData, data]);
      setAllSubmissions([...allSubmissions, data]);
      localStorage.setItem('submissions', JSON.stringify([...allSubmissions, data]));
      setFirstName('');
      setLastName('');
      setEmail('');
      setDob('');
      setPassword('');
      setConfirmPassword('');
    }
  };
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleInputChange = (fieldName, value, setter) => {
    setter(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  };
  
  const handleDelete = (index) => {
    const updatedSubmissions = allSubmissions.filter((_, i) => i !== index);
    setAllSubmissions(updatedSubmissions);
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => handleInputChange('firstName', e.target.value, setFirstName)} 
        />
      </label>
      {errors.firstName && <p className="error-message">{errors.firstName}</p>}
      <br />
      
      <label>
        Last Name:
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => handleInputChange('lastName', e.target.value, setLastName)} 
        />
      </label>
      {errors.lastName && <p className="error-message">{errors.lastName}</p>}
      <br />
      
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => handleInputChange('email', e.target.value, setEmail)} 
        />
      </label>
      {errors.email && <p className="error-message">{errors.email}</p>}
      <br />
      
      <label>
        Date of Birth:
        <input 
          type="date" 
          value={dob} 
          onChange={(e) => handleInputChange('dob', e.target.value, setDob)} 
        />
      </label>
      {errors.dob && <p className="error-message">{errors.dob}</p>}
      <br />
      
      <label>
        Password:
        <input 
          type="password" 
          value={password} 
          onChange={(e) => handleInputChange('password', e.target.value, setPassword)} 
        />
      </label>
      {errors.password && <p className="error-message">{errors.password}</p>}
      <br />
      
      <label>
        Confirm Password:
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => handleInputChange('confirmPassword', e.target.value, setConfirmPassword)} 
        />
      </label>
      {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
      <br />
      
      <input type="submit" value="Submit" />
      <h2>Submitted data:</h2>
      <table className="submitted-data-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allSubmissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.firstName}</td>
              <td>{submission.lastName}</td>
              <td>{submission.email}</td>
              <td>{submission.dob}</td>
              <td>
                <button type="button" onClick={() => handleDelete(index)} className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}

export default App;