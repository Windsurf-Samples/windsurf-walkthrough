import pytest
import os
import mysql.connector
from app import app, get_db_connection

@pytest.fixture
def client():
    os.environ['DB_NAME'] = 'contact_form_test_db'
    app.config['TESTING'] = True
    
    try:
        connection = mysql.connector.connect(
            host=os.getenv('DB_HOST', 'localhost'),
            user=os.getenv('DB_USER', 'contact_app'),
            password=os.getenv('DB_PASSWORD', 'contact_password')
        )
        cursor = connection.cursor()
        cursor.execute("CREATE DATABASE IF NOT EXISTS contact_form_test_db")
        cursor.execute("USE contact_form_test_db")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS contacts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        print(f"Test setup error: {err}")
    
    with app.test_client() as client:
        yield client
    
    try:
        connection = mysql.connector.connect(
            host=os.getenv('DB_HOST', 'localhost'),
            user=os.getenv('DB_USER', 'contact_app'),
            password=os.getenv('DB_PASSWORD', 'contact_password')
        )
        cursor = connection.cursor()
        cursor.execute("DROP DATABASE IF EXISTS contact_form_test_db")
        connection.commit()
        cursor.close()
        connection.close()
    except mysql.connector.Error as err:
        print(f"Test cleanup error: {err}")

def test_submit_contact(client):
    response = client.post('/api/contacts', json={
        'name': 'John Doe',
        'email': 'john@example.com',
        'message': 'Test message'
    })
    assert response.status_code == 201
    assert response.json['status'] == 'success'

def test_get_contacts(client):
    client.post('/api/contacts', json={
        'name': 'John Doe',
        'email': 'john@example.com',
        'message': 'Test message'
    })
    
    response = client.get('/api/contacts')
    assert response.status_code == 200
    contacts = response.json
    assert len(contacts) >= 1
    assert contacts[0]['name'] == 'John Doe'
    assert contacts[0]['email'] == 'john@example.com'

# TODO: Add more test cases for validation, error handling
