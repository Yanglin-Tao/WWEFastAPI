from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import Session, sessionmaker
from models.model import UserProfile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class UserCreate(BaseModel):
    email: str
    password: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = "postgresql://yanglintao:admin@localhost:5432/whatweeatapp"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return "You are connected to backend"

@app.post("/user/create/")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user = UserProfile(email=user.email, password=user.password)
    db.add(new_user)
    db.commit()
    return {"userID": new_user.userID, "email": new_user.email}