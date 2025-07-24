const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers provided');
    }
    const sum = num1 + num2;
    res.send(`Result: ${sum}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:`+port);
});
