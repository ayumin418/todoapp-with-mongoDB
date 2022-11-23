const express = require("express")
const app = express()
const taskRoute = require("./routes/tasks")

const PORT = 4000;

// ルーティング設計
app.use("/api/v1/tasks", taskRoute)

app.listen(PORT, console.log("サーバーが起動しました"))