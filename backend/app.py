from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# TODO: Add database integration
contacts = []

@app.route('/api/contacts', methods=['POST'])
def submit_contact():
    data = request.json
    # TODO: Add data validation
    contact = {
        'name': data.get('name'),
        'email': data.get('email'),
        'message': data.get('message')
    }
    contacts.append(contact)
    return jsonify({'status': 'success'}), 201

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    return jsonify(contacts)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
