# Contact Form Application

A simple contact form application with a React TypeScript frontend and Flask backend.

## Project Structure

```
contact-form-app/
├── frontend/    # React TypeScript frontend
└── backend/     # Flask Python backend
```

## Prerequisites

- Node.js (v14 or higher)
- Python 3.8 or higher
- npm or yarn

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a Python virtual environment:
```bash
python3 -m venv venv
```

3. Activate the virtual environment:
```bash
source venv/bin/activate  # On Unix/macOS
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Start the Backend Server

1. Make sure you're in the backend directory with the virtual environment activated
2. Run the Flask server:
```bash
python app.py
```
The backend will run on http://localhost:5000

### Start the Frontend Server

1. In a new terminal, navigate to the frontend directory
2. Start the development server:
```bash
npm start
```
The frontend will run on http://localhost:3000

## Features

- Basic contact form with name, email, and message fields
- REST API endpoints for submitting and retrieving contacts
- In-memory storage (no persistent database)
- Basic test setup

## Development Status

This is a partially complete application with:
- [ ] Form validation (TODO)
- [ ] Error handling (TODO)
- [ ] Success messages (TODO)
- [ ] Database integration (TODO)
- [ ] Complete test coverage (TODO)
