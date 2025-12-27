from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# This lets your React app talk to Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# A simple test endpoint
@app.get("/")
def read_root():
    return {"message": "Backend is alive!"}

@app.get("/test")
def test():
    return {"status": "working", "data": "Hello from Python!"}