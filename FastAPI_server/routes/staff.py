from fastapi import APIRouter

staff_router=APIRouter(prefix="/staff",tags=["staff"])

#localhost:8000/staff/addStaff
@staff_router.get("/addStaff")
def addSStaff():
    return "add Staff method called"

#localhost:8000/staff/getStaff
@staff_router.get("/getStaff")
def getStaff():
    return "get Staff method called"

#localhost:8000/staff/updateStaff
@staff_router.put("/updateStaff")
def updateStaff():
    return "update Staff method called"

#localhost:8000/staff/deleteStaff
@staff_router.delete("/deleteStaff")
def deleteStaff():
    return "delete Staff method called"