const express = require("express");

const app = express();
const port = 8080;
app.use("/user", require("./routes/users"));

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});