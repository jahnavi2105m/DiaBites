from flask import Flask, request, jsonify
import mysql.connector
import os

#connecting front-end and back-end components (Cross Origin Resource Sharing )
#from flask_cors import CORS
#CORS(src)

app = Flask(__name__)

# Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="StutiS",
    password="MySQL@Stuti2005",
    database="mealplan_db"
)

#Algorithim - calcuations based off given data 

#BMI calculation  
def calculate_bmi(weight, height):
    #weight(kg), height in m
    bmi = weight / ((height/100) **2) 
    return bmi

#BMR calculations
def calculate_bmr(weight,height,age,sex):
    #weight in kg, height in cm 
    if sex == 'male':
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
        return bmr
    elif sex == 'female':
        bmr = 10 * weight + 6.25 * height - 5 * age -161
        return bmr
    

#calorie calculations - based on BMI and activity_level 
def calculate_calories(bmi,bmr, activity_level):

    #adjustments based of activity level
    if activity_level == 'sedentary':
        calorie_calc = bmr * 1.2
    elif activity_level == 'lightly active':
        calorie_calc = bmr * 1.375
    elif activity_level == 'moderately active':
        calorie_calc = bmr * 1.55
    elif activity_level == 'very active':
        calorie_calc = bmr * 1.725
    elif activity_level == 'extra active':
        calorie_calc = bmr * 1.9

    #calorie calcuation - bmi 
    if bmi < 25:
        return calorie_calc
    elif 25 <= bmi < 30:
        return calorie_calc - 500
    else:
        return calorie_calc - 1000
        

#calculate portion sizes based on calorie calculations and excercise level 


# Sample route to test if the server is running
@app.route('/home', methods =['GET'])
def home():
     # Grabbing user data from the POST request
    data = request.json
    
    weight = data['weight']  # in kilograms
    height = data['height']  # in centimeters
    age = data['age']  # in years
    gender = data['gender']  # 'male' or 'female'
    activity_level = data['activity_level']  # sedentary, lightly active, etc.
    exercise_calories = data['exercise_calories']  # calories burned from exercise
    
    return "Meal Plan API is running!!"

if __name__ == '__main__':
    app.run(debug=True)






    
