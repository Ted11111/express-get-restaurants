const express = require("express")
const router = express.Router()
const app = express()
const port = 3000
const restaurantRouter = require("./router/restaurant")




// Express Routes

app.use("/restaurant", restaurantRouter)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
