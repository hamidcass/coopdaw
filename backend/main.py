from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

# This lets your React app talk to Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#init supabase client
supabase: Client = create_client(
    os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY")
)

# A simple test endpoint
@app.get("/")
def read_root():
    return {"message": "Backend is alive!"}

@app.get("/test")
def test():
    return {"status": "working", "data": "Hello from Python!"}

@app.get("/test-db")
def test_database():
    try:
       
        response = supabase.table('test_table').select("*").limit(1).execute()
        return {"status": "Database connected!", "data": response.data}
    except Exception as e:
        return {"status": "Database error", "error": str(e)}