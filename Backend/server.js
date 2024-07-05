const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')


dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
