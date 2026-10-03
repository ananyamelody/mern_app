from fastapi import FastAPI
app=FastAPI()   
@app.get("/getStudents")
def getStudents():
    return "get student method called"

@app.post("/addStudent")
def addStudent():
    return "add student method called "

@app.put("/updateStudent")
def updateStudent():
    return "update student method called"

@app.delete("/deleteStudent")
def deleteStudent():
    return "delete student method called"

@app.get("/getParticularStudent/{userid}")
def getParticularStudent(userid:int):
    return {"userid":userid}

@app.get("/getdeptdetails")
def getdeptdetails(dept:str,mark:int):
    return {"dept":dept,"mark":mark}      