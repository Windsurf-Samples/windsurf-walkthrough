import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

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
