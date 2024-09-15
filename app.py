from flask import Flask, request, jsonify
import mysql.connector
import os


app = Flask(__name__)

# Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="StutiS",
    password="MySQL@Stuti2005",
    database="mealplan_db"
)

#api integration





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
def calculate_meal_portions(total_calories):
    meal_portions = {
        'Breakfast': total_calories * 0.25,
        'Lunch': total_calories * 0.30,
        'Dinner': total_calories * 0.30,
        'Snacks': total_calories * 0.15
    }
    return meal_portions

#calculate daily insulin intake needed based on given factors (total daily dose)
def TDD(diabeties_type,weight):
    TDD = 0.55*weight
    return TDD

#calculate how many units of insulin are needed by carbs in meals 
def insulin_ratio(TDD,calorie_calc):
    carb = calorie_calc/4

    ratio = 500/TDD
    #ratio means that 1 unit of insulin will cover (raio amount) of carbs


# Sample route to test if the server is running
@app.route('/home', methods =['GET'])
def home():
     # Grabbing user data from the POST request
    data = request.json
    
    weight = data['weight']  # kg
    height = data['height']  # cm
    age = data['age']  
    gender = data['gender']  # 'male' or 'female'
    activity_level = data['activity_level']  
    diabeties_type = data['diabeties_type']  
    dietary_restrictions = data['dietary_restrictions']
    return "Meal Plan API is running!!"

if __name__ == '__main__':
    app.run(debug=True)






    
