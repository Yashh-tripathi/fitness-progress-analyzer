from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

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
    # Dummy logic for now
    predicted_weight = data.currentWeight - 2.5

    suggestions = [
        "Reduce daily calorie intake by 300 kcal",
        "Maintain workout consistency",
        "Stay hydrated",
        "Sleep at least 7 hours"
    ]

    return {
        "predictedWeight": predicted_weight,
        "confidence": "medium",
        "suggestions": suggestions
    }
