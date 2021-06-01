const express = require('express')
const bodyParser = require('body-parser')


const app = express();

app.listen(process.env.PORT || 3000, function() {
    console.log("The Server Is Running")
})