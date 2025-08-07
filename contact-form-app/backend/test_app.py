import pytest
from app import app, db

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        with app.app_context():
            db.drop_all()

def test_submit_contact(client):
    response = client.post('/api/contacts', json={
        'name': 'John Doe',
        'email': 'john@example.com',
        'message': 'Test message'
    })
    assert response.status_code == 201
    assert response.json['status'] == 'success'
    assert response.json['email'] == 'john@example.com'

# TODO: Add more test cases for validation, error handling
