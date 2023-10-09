from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import Session, sessionmaker
from models.model import UserProfile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Base models
class RegisterCommonUser(BaseModel):
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

# CommonUser
@app.post("/display-common-user-monthly-report")
def display_common_user_monthly_report(db: Session = Depends(get_db)):
    pass

@app.post("/display-common-user-profile")
def display_common_user_profile(db: Session = Depends(get_db)):
    pass

@app.post("/display-shopping-cart")
def display_shopping_cart(db: Session = Depends(get_db)):
    pass

@app.post("/edit-common-user-profile")
def edit_common_user_profile(db: Session = Depends(get_db)):
    pass

@app.post("/login-common-user")
def login_common_user(db: Session = Depends(get_db)):
    pass

@app.post("/register-common-user")
def register_common_user(user: RegisterCommonUser, db: Session = Depends(get_db)):
    new_user = UserProfile(email=user.email, password=user.password)
    db.add(new_user)
    db.commit()
    return {"userID": new_user.userID, "email": new_user.email}

# DiningHall
@app.post("/display-dining-hall-monthly-report")
def display_dining_hall_monthly_report(db: Session = Depends(get_db)):
    pass

@app.post("/login-dining-hall")
def login_dining_hall(db: Session = Depends(get_db)):
    pass

@app.post("/register-dining-hall")
def register_dining_hall(db: Session = Depends(get_db)):
    pass

# Menu
@app.post("/create-daily-menu")
def create_daily_menu(db: Session = Depends(get_db)):
    pass

@app.post("/create-menu-item")
def create_menu_item(db: Session = Depends(get_db)):
    pass

@app.post("/display-daily-menu")
def display_daily_menu(db: Session = Depends(get_db)):
    pass

@app.post("/display-menu-item")
def display_menu_item(db: Session = Depends(get_db)):
    pass


