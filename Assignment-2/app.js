const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5002;

// Connect to MongoDB

mongoose.
connect('mongodb+srv://Admin:12345@api.hzqdktj.mongodb.net/Node-API?retryWrites=true&w=majority');

// Use body-parser middleware
app.use(bodyParser.json());

// Routes
app.use('/api/items', require('./routes/items'));

// Start the server only if this is the main module
if (require.main === module) {
    app.listen(port, () => console.log(`Server started on port ${port}`));
}

module.exports = app;
