const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use middleware
app.use(bodyParser.json());

app.post('/update-profile', (req, res) => {
    const { username, email } = req.body;

    // Logic to update profile in database
    // For example, use MongoDB, MySQL, etc. to update user info

    res.status(200).json({ message: 'Profile updated successfully' });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
