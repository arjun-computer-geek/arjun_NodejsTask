const express = require('express');
const app = express();

app.get('/api/v1', (req, res) => {
    res.status(200).json({
        success: true, 
        message: 'working...'
    })
})

const port = process.env.APP_PORT || 8080;
app.listen(port, (req, res) => {
    console.log(`app is running on port: ${port}`)
})