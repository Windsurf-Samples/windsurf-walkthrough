from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host=os.getenv('DB_HOST', 'localhost'),
            user=os.getenv('DB_USER', 'root'),
            password=os.getenv('DB_PASSWORD', ''),
            database=os.getenv('DB_NAME', 'contact_form_db')
        )
        return connection
    except mysql.connector.Error as err:
        print(f"Database connection error: {err}")
        return None

@app.route('/api/contacts', methods=['POST'])
def submit_contact():
    data = request.json
    
    if not data.get('name'):
        return jsonify({'status': 'error', 'message': 'Name is required'}), 400
    if not data.get('message'):
        return jsonify({'status': 'error', 'message': 'Message is required'}), 400
    if not data.get('email'):
        return jsonify({'status': 'error', 'message': 'Email is required'}), 400
    
    connection = get_db_connection()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Database connection failed'}), 500
    
    try:
        cursor = connection.cursor()
        query = "INSERT INTO contacts (name, email, message) VALUES (%s, %s, %s)"
        cursor.execute(query, (data.get('name'), data.get('email'), data.get('message')))
        connection.commit()
        cursor.close()
        connection.close()
        return jsonify({'status': 'success'}), 201
    except mysql.connector.Error as err:
        print(f"Database error: {err}")
        return jsonify({'status': 'error', 'message': 'Failed to save contact'}), 500

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    connection = get_db_connection()
    if not connection:
        return jsonify({'status': 'error', 'message': 'Database connection failed'}), 500
    
    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT name, email, message, created_at FROM contacts ORDER BY created_at DESC")
        contacts = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(contacts)
    except mysql.connector.Error as err:
        print(f"Database error: {err}")
        return jsonify({'status': 'error', 'message': 'Failed to retrieve contacts'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
