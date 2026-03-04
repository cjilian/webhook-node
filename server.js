const express = require('express'); 
const app = express();

// This tells the server to understand the "package" (data) being sent
app.use(express.json());

// This is your "Front Door" (the endpoint)
app.post('/incoming-data', (req, res) => {
    console.log("Headers:", req.headers); // This shows what KIND of data is coming
    console.log("Body:", req.body);        // This is the actual data
    res.status(200).send('Got it!');
});

// This tells the server to stay awake and listen
app.listen(3000, () => console.log('Mailbox is open on Port 3000!'));
