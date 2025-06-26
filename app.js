const express= require('express')
const dotenv = require('dotenv')
dotenv.config()
const expressEjsLayout = require('express-ejs-layouts')
const frontendRoutes = require('./routes/frontendRoutes')
// const { json } = require('stream/consumers')
const app = express()

const port = process.env.Port || 4008

app.set('view engine','ejs')
app.set("layout", __dirname + "/views/master")
app.set('views', __dirname + "/views/pages/")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'));
app.use(expressEjsLayout)
app.use("/", frontendRoutes)


const server = ()=>{
    try {
        app.listen(port ,()=>{
            console.log(`server started on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

server()
