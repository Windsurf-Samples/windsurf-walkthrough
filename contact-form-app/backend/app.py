from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'message': self.message
        }

@app.route('/api/contacts', methods=['POST'])
def submit_contact():
    data = request.json
    
    if not data.get('name'):
        return jsonify({'status': 'error', 'message': 'Name is required'}), 400
    if not data.get('message'):
        return jsonify({'status': 'error', 'message': 'Message is required'}), 400
    if not data.get('email'):
        return jsonify({'status': 'error', 'message': 'Email is required'}), 400
    
    contact = Contact(
        name=data.get('name'),
        email=data.get('email'),
        message=data.get('message')
    )
    
    try:
        db.session.add(contact)
        db.session.commit()
        
        response_data = contact.to_dict()
        response_data['status'] = 'success'
        return jsonify(response_data), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'status': 'error', 'message': 'Failed to save contact'}), 500

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    contacts = Contact.query.all()
    return jsonify([contact.to_dict() for contact in contacts])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
