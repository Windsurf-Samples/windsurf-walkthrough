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
- MySQL Server 8.0 or higher

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

5. Set up MySQL database:
```bash
# Install MySQL Server if not already installed
# On Ubuntu/Debian:
sudo apt update
sudo apt install mysql-server

# On macOS with Homebrew:
brew install mysql

# Start MySQL service
sudo systemctl start mysql  # On Linux
brew services start mysql   # On macOS
```

6. Create the database and tables:
```bash
# Log into MySQL as root
mysql -u root -p

# Run the setup script
source setup_database.sql

# Or manually run:
# CREATE DATABASE IF NOT EXISTS contact_form_db;
# USE contact_form_db;
# CREATE TABLE IF NOT EXISTS contacts (
#     id INT AUTO_INCREMENT PRIMARY KEY,
#     name VARCHAR(255) NOT NULL,
#     email VARCHAR(255) NOT NULL,
#     message TEXT NOT NULL,
#     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
# );
```

7. Configure environment variables:
```bash
# Copy the example .env file and update with your MySQL credentials
cp .env.example .env
# Edit .env file with your MySQL password:
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=your_mysql_password
# DB_NAME=contact_form_db
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
- MySQL database for persistent storage
- Basic test setup with database integration

## Development Status

This is a partially complete application with:
- [ ] Form validation (TODO)
- [ ] Error handling (TODO)
- [ ] Success messages (TODO)
- [x] Database integration (MySQL)
- [ ] Complete test coverage (TODO)

## Testing

To run the backend tests:
```bash
cd backend
source venv/bin/activate
python -m pytest
```

Note: Tests require a running MySQL server and will create/drop a test database.
