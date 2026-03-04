const express = require('express'); 
const app = express();

// This tells the server to understand the "package" (data) being sent
app.use(express.json());

// This is your "Front Door" (the endpoint)
app.post('/incoming-data', (req, res) => {
    console.log("I got a package!");
    console.log("Inside the package is:", req.body);
    
    // You MUST say "Thank you" (Status 200) or the driver will keep knocking
    res.status(200).send('Package Received!');
});

// This tells the server to stay awake and listen
app.listen(3000, () => console.log('Mailbox is open on Port 3000!'));