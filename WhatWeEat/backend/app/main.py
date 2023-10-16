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
    allow_origins=["http://localhost:3000"], 
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
@app.post("/get-common-user-monthly-report")
def get_common_user_monthly_report(db: Session = Depends(get_db)):
    """
    Calculate common user's monthly calorie intake.

    Parameters:
    User token.

    Returns:
    monthlyCalorieIntake (int): Total calorie intake in the current month.

    """
    pass

@app.post("/get-common-user-food-preference")
def get_common_user_food_preference(db: Session = Depends(get_db)):
    """
    Get common user's food preferences.

    Parameters:
    User token.

    Returns:
    listFoodPreferences (list of strings): A list of food preferences.

    """
    pass

@app.post("/edit-common-user-food-preference")
def edit_common_user_food_preference(db: Session = Depends(get_db)):
    """
    Set common user's food preferences

    Parameters:
    User token.
    operation (string): Add or delete operation.
    foodPreference (string): A food preference.

    Returns:
    None.

    """
    pass

@app.post("/get-common-user-allergy")
def get_common_user_allergy(db: Session = Depends(get_db)):
    """
    Get common user's food allergies.

    Parameters:
    User token.

    Returns:
    listAllergies (list of strings): A list of food allergies.

    """
    pass

@app.post("/edit-common-user-allergy")
def edit_common_user_allergy(db: Session = Depends(get_db)):
    """
    Edit common user's food allergies.

    Parameters:
    User token.
    operation (string): Add or delete operation.
    foodPreference (string): A food preference.

    Returns:
    None.

    """
    pass

@app.post("/get-common-user-goals")
def get_common_user_goals(db: Session = Depends(get_db)):
    """
    Get common user's dietary goal.

    Parameters:
    User token.

    Returns:
    calorieIntakePerDay (int): Calorie intake per day.
    startDate (Date): Start date.
    endDate (Date): End date.

    """
    pass

@app.post("/edit-common-user-goals")
def edit_common_user_goals(db: Session = Depends(get_db)):
    """
    Edit common user's dietary goal.

    Parameters:
    User token.
    caloriesIntakePerDay (int): New calorie intake per day.

    Returns:
    None.

    """
    pass

@app.post("/get-shopping-cart")
def get_shopping_cart(db: Session = Depends(get_db)):
    """
    Get common user's meal shopping cart.

    Parameters:
    User token.

    Returns:
    listMenuItems (list of MenuItem): A list of menu items added to the user's meal shopping cart.

    """
    pass

@app.post("/login-common-user")
def login_common_user(db: Session = Depends(get_db)):
    """
    Login common user.

    Parameters:
    email (string): Common user's email address.
    password (string): Common user's password.

    Returns:
    User token.

    """
    pass

@app.post("/register-common-user")
def register_common_user(user: RegisterCommonUser, db: Session = Depends(get_db)):
    """
    Register common user.

    Parameters:
    email (string): Common user's email address.
    password (string): Common user's password.

    Returns:
    User token.

    """
    new_user = UserProfile(email=user.email, password=user.password)
    db.add(new_user)
    db.commit()
    return {"userID": new_user.userID, "email": new_user.email}

# DiningHall
@app.post("/get-dining-hall-monthly-report")
def get_dining_hall_monthly_report(db: Session = Depends(get_db)):
    """
    Calculate dining hall's top ten rated food and top ten food allergies.

    Parameters:
    User token.

    Returns:
    topTenRatedFood (list of MenuItem): Top ten rated food on the menu for the current month.
    topTenAllergies (list of strings): Top ten food allergies for the current month.

    """
    pass

@app.post("/login-dining-hall")
def login_dining_hall(db: Session = Depends(get_db)):
    """
    Login dining hall user.

    Parameters:
    email (string): Dining hall's email address.
    password (string): Dining hall's password.

    Returns:
    User token.

    """
    pass

@app.post("/register-dining-hall")
def register_dining_hall(db: Session = Depends(get_db)):
    """
    Register dining hall user.

    Parameters:
    email (string): Dining hall's email address.
    password (string): Dining hall's password.
    institutionId (string): The id provided by the institution which the dining hall belong to.

    Returns:
    User token.

    """
    pass

# Menu
@app.post("/create-daily-menu")
def create_daily_menu(db: Session = Depends(get_db)):
    """
    Create daily menu.

    Parameters:
    date (Date): The date where the menu is offered.

    Returns:
    None

    """
    pass

@app.post("/create-menu-item")
def create_menu_item(db: Session = Depends(get_db)):
    """
    Upload menu item.

    Parameters:
    name (string): Name of the dish on the menu.
    category (string): Food category.
    listIngredients (list of strings): A list of food ingredients.
    listDietaryTags (string): A list of dietary tags.
    calories (int): Calories per serving.

    Returns:
    None.

    """
    pass

@app.post("/get-daily-menu")
def get_daily_menu(db: Session = Depends(get_db)):
    """
    Get dining hall's daily menu.

    Parameters:
    date (Date): The date where the menu is offered.

    Returns:
    listMenuItems (list of MenuItem): A list of daily menu items.

    """
    pass

@app.post("/get-menu-item")
def get_menu_item(db: Session = Depends(get_db)):
    """
    Get menu item.

    Parameters:
    id (string): Id of the menu item.

    Returns:
    name (string): Name of the dish on the menu.
    category (string): Food category.
    listIngredients (list of strings): A list of food ingredients.
    listDietaryTags (string): A list of dietary tags.
    calories (int): Calories per serving.

    """
    pass

@app.post("/edit-menu-item")
def edit_menu_item(db: Session = Depends(get_db)):
    """
    Edit menu item.

    Parameters:
    operation (string): add/delete/update

    Returns:
    None.

    """
    pass


