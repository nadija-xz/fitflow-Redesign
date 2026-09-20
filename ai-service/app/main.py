from fastapi import FastAPI

# FitFlow AI Microservice — serves the on-device/cloud workout
# personalization model and the computer-vision food-recognition
# pipeline, isolated from the main API for independent scaling
# (see docs/architecture-notes.md).
app = FastAPI(title="FitFlow AI Microservice")


@app.get("/health")
def health():
    return {"status": "ok"}


# from app.routers import workout_plan, food_recognition
# app.include_router(workout_plan.router, prefix="/workout-plan")
# app.include_router(food_recognition.router, prefix="/food-recognition")
