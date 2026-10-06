from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

#connect with our mongodb connection
client=MongoClient(os.getenv("MONGO_URL"))

#connect with our DB
db=client['college_db']

#connect with collection
student_collection=db['students']
staff_collection=db['staff']