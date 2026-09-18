let express=require('express');
let app=express();
let hrroutes=require('./routes/hr_routes')

app.use("/api/hr",hrroutes);
//localhost:2829/api/hr/viewemployees



//run server
app.listen(2829,()=>{
    console.log("server listening on port 2829");
})