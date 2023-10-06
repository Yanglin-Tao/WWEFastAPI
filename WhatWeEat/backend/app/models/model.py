from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Date, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker

Base = declarative_base()

class DailyMenu(Base):
    __tablename__ = 'daily_menus'
    menuID = Column(Integer, primary_key=True)
    date = Column(Date)
    diningHallID = Column(Integer, ForeignKey('dining_halls.diningHallID'))
    dishesID = Column(Integer) # This might need a relationship if dishes are stored in another table

class DiningHallReport(Base):
    __tablename__ = 'dining_hall_reports'
    diningHallID = Column(Integer, primary_key=True)
    date = Column(Date)
    dietPreferences = Column(String)
    top10PriorityFoodAllergies = Column(String)
    top10HighestRatedDishes = Column(String)

class MealTracking(Base):
    __tablename__ = 'meal_trackings'
    userID = Column(Integer, primary_key=True)
    shoppingCart = Column(String)
    intakeRecords = Column(String)
    dishRatings = Column(Float)
    calorieIntake = Column(Float)
    fatIntake = Column(Float)
    nutrientIntake = Column(Float)

class Institution(Base):
    __tablename__ = 'institutions'
    institutionID = Column(Integer, primary_key=True)
    name = Column(String)

class DiningHall(Base):
    __tablename__ = 'dining_halls'
    diningHallID = Column(Integer, primary_key=True)
    institutionID = Column(Integer, ForeignKey('institutions.institutionID'))
    name = Column(String)

class UserProfile(Base):
    __tablename__ = 'user_profiles'
    userID = Column(Integer, primary_key=True)
    email = Column(String)
    password = Column(String)
    institutionID = Column(Integer, ForeignKey('institutions.institutionID'))
    foodPreferences = Column(String)
    foodAllergies = Column(String)
    dietPlan = Column(String)

class MonthlyReport(Base):
    __tablename__ = 'monthly_reports'
    userID = Column(Integer, ForeignKey('user_profiles.userID'), primary_key=True)
    date = Column(Date, primary_key=True)
    dietGoal = Column(Float)
    actualIntake = Column(Float)
    accompPercent = Column(Float)

class MenuItem(Base):
    __tablename__ = 'menu_items'
    dishID = Column(Integer, primary_key=True)
    name = Column(String)
    category = Column(String)
    ingredients = Column(String)
    allergens = Column(String)
    dietaryTags = Column(String)
    calories = Column(Float)

DATABASE_URL = "postgresql://yanglintao:admin@localhost:5432/whatweeatapp"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

def init_db():
    Base.metadata.create_all(bind=engine)

init_db()
