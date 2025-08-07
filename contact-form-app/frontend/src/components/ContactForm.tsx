import React, { useState } from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';

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
    if (!formData.name.trim()) {
      // Windsurf will suggest validation logic
    }
    
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
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: '2rem auto' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={Object.keys(errors).length > 0 || !formData.name || !formData.email || !formData.message}
          sx={{ 
            backgroundColor: '#007bff',
            '&:hover': { backgroundColor: '#0056b3' },
            marginTop: 2
          }}
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactForm;
