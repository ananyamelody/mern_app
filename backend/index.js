let express = require('express');
let mongoose = require('mongoose');

let app = express();

let hrroutes = require('./routes/hr_routes');
let emproutes =require('./routes/emp_routes');
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/hr_management")
    .then(() => {
        console.log("DB connection success");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/api/hr", hrroutes);
app.use("/api/emp",emproutes);

// localhost:2829/api/hr/viewemployees

// run server
app.listen(2829, () => {
    console.log("server listening on port 2829");
});