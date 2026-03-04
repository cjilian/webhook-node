const express = require('express');
const multer = require('multer'); // Load the tool to handle "Multipart" crates
const upload = multer();        // Initialize the tool
const app = express();

// This handles standard JSON "letters"
app.use(express.json());

// This handles "Form-data" packages
// upload.any() tells the server: "Accept any fields inside this crate"
app.post('/incoming-data', upload.any(), (req, res) => {
    console.log("--- New Webhook Arrived ---");
    console.log("Headers:", req.headers);
    
    // With Multer, the data now populates inside req.body
    console.log("Body Data:", req.body);

    // If there are files/attachments, they will show up here
    if (req.files && req.files.length > 0) {
        console.log("Files found:", req.files);
    }
    
    res.status(200).send('Crate opened and data received!');
});

// This tells the server to stay awake and listen
// Note: Render sets the Port automatically, but 3000 is a good default
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Mailbox is open on Port ${PORT}!`));
