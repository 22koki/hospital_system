const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/patients', require('./routes/patients'));
app.use('/api/prescriptions', require('./routes/prescriptions'));
app.use('/api/labResults', require('./routes/labResults'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
