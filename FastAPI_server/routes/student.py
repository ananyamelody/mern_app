from fastapi import APIRouter

from database import student_collection
from models import Student_model

student_router=APIRouter(prefix="/student", tags=["student"])


#localhost:8000/student/addStudent
@student_router.post("/addStudent")
def addStudent():
    return "add Student method called"
    result=student_collection.insert_one(stu.model_dump())
    return "add Student method called"

#localhost:8000/student/getStudent
@student_router.get("/getStudent")
def getStudent():
    return "get Student method called"

#localhost:8000/student/updateStudent
@student_router.put("/updateStudent")
def updateStudent():
    return "update Student method called"

#localhost:8000/student/deleteStudent
@student_router.delete("/deleteStudent")
def deleteStudent():
    return "delete Student method called"