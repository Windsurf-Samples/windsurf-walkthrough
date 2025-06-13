import React, { useState } from 'react';

// String utility functions - needing to be moved to utils file
// Validates email using regex pattern
// This regex checks for:
// - One or more characters before @ symbol
// - @ symbol
// - One or more characters for domain
// - Dot followed by 2-4 characters for TLD
const isEmailValid = (email: string): boolean => {
  const re = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');
  return re.test(email);
};

// Sanitizes input by doing a bunch of stuff
const sanitizeInputString = (inputString: string): string => {
  // Remove extra whitespace
  const noExtraWhitespace = inputString.replace(/\s+/g, ' ');
  // Trim
  const trimmed = noExtraWhitespace.trim();
  // Remove special characters
  const noSpecialCharacters = trimmed.replace(/[^\w\s]/gi, '');
  return noSpecialCharacters;
};

// Validates string length is between min and max
const isStringLengthValid = (str: string, min: number, max: number): boolean => {
  const length = str.trim().length;
  if (length < min) {
    return false;
  }
  if (length > max) {
    return false;
  }
  return true;
};


interface ContactFormData {
  name: string;
  email: string;
  message: string;

}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate name (2-50 characters)
    const sanitizedName = sanitizeInputString(formData.name);
    if (!isStringLengthValid(sanitizedName, 2, 50)) {
      newErrors.name = 'Name must be between 2 and 50 characters';
    }

    // Validate email
    if (!isEmailValid(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate message (10-500 characters)
    if (!isStringLengthValid(formData.message, 10, 500)) {
      newErrors.message = 'Message must be between 10 and 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const sanitizedData = {
      name: sanitizeInputString(formData.name),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };
    
    try {
      const response = await fetch('http://127.0.0.1:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });
      
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ message: 'Failed to submit form. Please try again.' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateForm(); // Validate on each change
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <div className="error-message">{errors.message}</div>}
      </div>
      <button 
        type="submit" 
        disabled={Object.keys(errors).length > 0 || !formData.name || !formData.email || !formData.message}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
