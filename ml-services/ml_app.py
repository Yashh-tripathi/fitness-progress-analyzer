from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from statistics import mean

app = FastAPI()

class Log(BaseModel):
    date: str
    weight: float
    calories: int
    workoutMinutes: int

class PredictionRequest(BaseModel):
    age: int
    height: float
    gender: str
    goal: str
    currentWeight: float
    logs: List[Log]
    daysAhead: int
    
@app.get("/")
def root():
    return {"status": "ML service running"}

class Log(BaseModel):
    date: str
    weight: float
    calories: int
    workoutMinutes: int

class PredictionRequest(BaseModel):
    age: int
    height: float
    gender: str
    goal: str
    currentWeight: float
    logs: List[Log]
    daysAhead: int



@app.post("/predict")
def predict(data: PredictionRequest):
    weights = [log.weight for log in data.logs]

    # Safety check
    if len(weights) < 3:
        return {
            "predictedWeight": data.currentWeight,
            "confidence": "low",
            "suggestions": [
                "Add more daily logs for better prediction"
            ]
        }

    # Calculate daily weight change
    daily_changes = [
        weights[i] - weights[i - 1]
        for i in range(1, len(weights))
    ]

    avg_daily_change = mean(daily_changes)

    predicted_weight = round(
        data.currentWeight + (avg_daily_change * data.daysAhead),
        2
    )
    
    avg_calories = mean([log.calories for log in data.logs])
    avg_workout = mean([log.workoutMinutes for log in data.logs])

    # Goal-based suggestions
    suggestions = []

    if data.goal == "Lose Weight":
        if avg_calories > 2200:
            suggestions.append("Reduce daily calorie intake by 300–400 kcal")
        if avg_workout < 30:
            suggestions.append("Increase workout time to at least 30 min/day")
        suggestions.append("Include high-protein meals")

    elif data.goal == "Gain Muscle":
        if avg_calories < 2500:
            suggestions.append("Increase calorie intake with complex carbs")
        if avg_workout < 45:
            suggestions.append("Increase strength training duration")
        suggestions.append("Ensure 1.6–2g protein per kg bodyweight")
        
    elif data.goal == "Gain Muscle":
        if avg_calories < 2500:
            suggestions.append("Increase calorie intake with complex carbs")
        if avg_workout < 45:
            suggestions.append("Increase strength training duration")
        suggestions.append("Ensure 1.6–2g protein per kg bodyweight")

    else:
        suggestions = [
            "Maintain consistent eating habits",
            "Track weekly progress",
            "Focus on recovery and sleep"
        ]

    return {
        "predictedWeight": predicted_weight,
        "confidence": "high",
        "suggestions": suggestions
    }
