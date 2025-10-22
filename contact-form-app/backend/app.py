from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:3000", "http://127.0.0.1:3000"]}})

@app.after_request
def add_security_headers(response):
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Content-Security-Policy'] = "default-src 'self'"
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    return response


# TODO: Add database integration
contacts = []

@app.route('/api/contacts', methods=['POST'])
def submit_contact():
    data = request.json
    
    if not data.get('name') or not data.get('name').strip():
        return jsonify({'status': 'error', 'message': 'Name is required'}), 400
    if not data.get('email') or not data.get('email').strip():
        return jsonify({'status': 'error', 'message': 'Email is required'}), 400
    if not data.get('message') or not data.get('message').strip():
        return jsonify({'status': 'error', 'message': 'Message is required'}), 400
    
    if len(data.get('name', '')) > 100:
        return jsonify({'status': 'error', 'message': 'Name too long'}), 400
    if len(data.get('email', '')) > 100:
        return jsonify({'status': 'error', 'message': 'Email too long'}), 400
    if len(data.get('message', '')) > 1000:
        return jsonify({'status': 'error', 'message': 'Message too long'}), 400
    
    contact = {
        'name': data.get('name').strip(),
        'email': data.get('email').strip().lower(),
        'message': data.get('message').strip()
    }
    
    contacts.append(contact)
    return jsonify({'status': 'success'}), 201

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    return jsonify(contacts)

if __name__ == '__main__':
    app.run(debug=False, port=5000)
