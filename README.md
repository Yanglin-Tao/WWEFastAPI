# What We Eat
## Backend
### Set up 
Python FastAPI (assume you already installed pip tool and python virtual env)
1. pipenv shell
1. pip install 'fastapi[all]' 
2. pip install uvicorn 
3. pip install sqlalchemy 
4. pip install psycopg2-binary 
### To run backend:
`uvicorn main:app --reload`

## Frontend
### Set up 
React (assuming you already installed React)
1. npm install axios
### To run backend:
Make sure your backend server is up and running then run `npm start`


## Database
Postgresql
1. Download Postgresql
2. Create a database named 'whatweeatapp'
3. In pgAdmin4, go to Tools > Query Tool, then run the following queries:
```
GRANT CONNECT ON DATABASE whatweeatapp TO [your_name];
GRANT USAGE ON SCHEMA public TO [your_name];
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO [your_name];
ALTER DATABASE "whatweeatapp" OWNER TO "[your_name]";
SELECT * FROM user_profiles;
```
Notice that I used 'yanglintao' in main.py in the backend folder. To avoid merging issues, it's better to use the same name. You can create a new role named 'yanglintao' and set passwords. But feel free to change to your role name as long as you do not commit that change.


