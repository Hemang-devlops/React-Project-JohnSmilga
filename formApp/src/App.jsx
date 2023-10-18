import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    selection: '',
    date: '',
  });
  const [mandatory, setMandatory] =useState(false);
  const [formErrors, setFormErrors] = useState({
    text: '',
    email: '',
    selection: '',
    date: '',
  });

  const [errorMessages, setErrorMessages] = useState('');

  const validateEmail = (email) => {
    // Email validation regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation for email field
    if (name === 'email') {
      if (!validateEmail(value)) {
        setFormErrors({ ...formErrors, email: 'Invalid email format' });
      } else {
        setFormErrors({ ...formErrors, email: '' });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Check if fields are empty and update errors
    if (formData.text === '' && formData.email === '' && formData.selection === '' && formData.date === '') {
      setMandatory(true);
    }

    for (const field in formData) {
      if (formData[field].trim() === '') {
        newFormErrors[field] = 'This field is mandatory';
        isValid = false;
        setMandatory(false);
      }
    }

    // Date validation: Ensure the date is in the future
    const currentDate = new Date();
    const selectedDate = new Date(formData.date);
    if (selectedDate <= currentDate) {
      newFormErrors.date = 'Date must be in the future';
      isValid = false;
    }

    setFormErrors(newFormErrors);

    if (isValid) {
      setErrorMessages('');
      // Perform other actions or submit the form here
      console.log('Form Data:', formData);
    } else {
      setErrorMessages('All fields are mandatory');
    }
  };

  useEffect(() => {
    // Clear the error messages if any field is filled
    if (formData.text || formData.email || formData.selection || formData.date) {
    setFormErrors();
setMandatory(false);
    }
  }, [formData]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Text Field:</label>
          <input
            type="text"
            className="form-control"
            id="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          />
          {formErrors.text && <div className="text-danger">{formErrors.text}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Field:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="selection">Selection Field:</label>
          <select
            className="form-control"
            id="selection"
            name="selection"
            value={formData.selection}
            onChange={handleInputChange}
          >
            <option value="">Select an option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          {formErrors.selection && <div className="text-danger">{formErrors.selection}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date Field:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          {formErrors.date && <div className="text-danger">{formErrors.date}</div>}
        </div>
        {mandatory && <div className="text-danger">All Fields are mandatory</div>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
