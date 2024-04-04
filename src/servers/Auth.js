const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const User = require('../servers/models/userModel.js');

const app = express();
const cors = require('cors');


const corsOptions = {
  origin: '*', 
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const MONGODB_URL = 'mongodb+srv://atleon:mEKgBkIb41svUDQn@cluster0.jwopwby.mongodb.net/Cryptonite?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

    const store = new MongoDBStore({
  uri: MONGODB_URL,
  collection: 'sessions'
});

// Catch errors
store.on('error', function(error) {
  console.error('Session store error:', error);
});

// Use sessions
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, 
    secure: false,
    httpOnly: true
  }
}));

app.post('/api/register', async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    req.session.user = user;

    // Log session data to the console
    console.log(req.session);

    // Return success message and dashboard URL
    res.status(200).json({ success: true, message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
