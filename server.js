const express = require("express")
const dbconnect = require("./config/db")
const routes = require("./routes/student.routes")
const app = express()

app.use(express.json())
app.use("/", routes)

app.listen(4000, () => {
    console.log("This server is running at port 4000");
})

dbconnect()