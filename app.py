from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="StutiS",
    password="MySQL@Stuti2005",
    database="mealplan_db"
)

# Sample route to test if the server is running
@app.route('/')
def home():
    return "Meal Plan API is running!"

if __name__ == '__main__':
    app.run(debug=True)
