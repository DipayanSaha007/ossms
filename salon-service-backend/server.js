const express = require('express');
const app = express();
const port = 5000;
const authRoutes = require('./routes/auth');
const serviceRoutes = require('./routes/service');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/service', serviceRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
