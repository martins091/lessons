// 1. Introduction to Node.js and Express.js
// Definition:
// Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server side.
// Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
// Explanation: Introduce the learner to Node.js and Express.js, explaining their roles in backend development.
// Example:
// javascript
// Copy code
// index.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('welcome to our app');
});

app.get('/about', (req, res) => {
  res.send('about page!');
});

app.get('/service', (req, res) => {
  res.send('service page!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// 2. Setting Up a Basic Express Server
// Definition: Setting up a server using Express involves initializing an Express application and defining how it responds to client requests.
// Explanation: Guide the learner to set up a basic Express server, which includes creating an Express application and defining a route.
// Example:
// javascript
// Copy code
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// app.listen(port, () => {
//   console.log('Server running at http://localhost:3000');
// });
// 3. Middleware in Express.js
// Definition: Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
// Explanation: Middleware is used for handling various tasks such as parsing request bodies, logging, authentication, etc.
// Example:
// javascript
// Copy code
// const express = require('express');
// const app = express();

// // Logger middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// app.get('/', (req, res) => {
//   res.send('Middleware example');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
// 4. Routing in Express.js
// Definition: Routing refers to how an application’s endpoints (URIs) respond to client requests.
// Explanation: Define routes for different HTTP methods (GET, POST, PUT, DELETE) and organize them using the Express Router.
// Example:
// javascript
// Copy code
// const express = require('express');
// const app = express();
// const router = express.Router();

// router.get('/users', (req, res) => {
//   res.send('Get all users');
// });

// router.post('/users', (req, res) => {
//   res.send('Create a new user');
// });

// app.use('/api', router);

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
// 5. Handling Request Data
// Definition: Express provides middleware to handle data sent in the request body, such as express.json() and express.urlencoded().
// Explanation: Demonstrate how to handle JSON and URL-encoded data from client requests.
// Example:
// javascript
// Copy code
// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/data', (req, res) => {
//   console.log(req.body);
//   res.send('Data received');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
// 6. Serving Static Files
// Definition: Serving static files means providing files such as HTML, CSS, and JavaScript from the server to the client.
// Explanation: Use express.static middleware to serve static files from a directory.
// Example:
// javascript
// Copy code
// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
// 7. Error Handling
// Definition: Error handling middleware in Express catches and processes errors that occur during the request-response cycle.
// Explanation: Create custom error-handling middleware to manage and respond to errors.
// Example:
// javascript
// Copy code
// const express = require('express');
// const app = express();

// app.get('/', (req, res, next) => {
//   const err = new Error('Something went wrong');
//   err.statusCode = 400;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || 'Internal Server Error';
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message
//   });
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
// 8. Using Express Router for Modularization
// Definition: Express Router is a mini Express application that allows you to create modular route handlers.
// Explanation: Use the Express Router to organize routes and keep the codebase modular.
// Example:
// javascript
// Copy code
// const express = require('express');
// const app = express();
// const userRouter = express.Router();

// userRouter.get('/', (req, res) => {
//   res.send('User route');
// });

// app.use('/users', userRouter);

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
// 9. Connecting to a Database
// Definition: Connecting to a database involves setting up a connection between your Express application and a database to store and retrieve data.
// Explanation: Demonstrate connecting to MongoDB using Mongoose.
// Example:
// javascript
// Copy code
// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });

// const User = mongoose.model('User', userSchema);

// app.get('/users', async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
// 10. Authentication and Authorization
// Definition: Authentication is the process of verifying the identity of a user, while authorization is the process of verifying what they have access to.
// Explanation: Implement user authentication and authorization using JSON Web Tokens (JWT).
// Example:
// javascript
// Copy code
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();

// app.use(express.json());

// const users = [{ id: 1, username: 'user1', password: 'pass1' }];

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username && u.password === password);
//   if (user) {
//     const token = jwt.sign({ id: user.id }, 'secretkey');
//     res.json({ token });
//   } else {
//     res.status(401).send('Invalid credentials');
//   }
// });

// app.get('/protected', (req, res) => {
//   const token = req.headers['authorization'];
//   if (token) {
//     jwt.verify(token, 'secretkey', (err, decoded) => {
//       if (err) {
//         res.status(401).send('Invalid token');
//       } else {
//         res.send('Protected route');
//       }
//     });
//   } else {
//     res.status(401).send('No token provided');
//   }
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
// 11. Deploying an Express Application
// Definition: Deploying an Express application involves making it available on the internet through a cloud platform.
// Explanation: Demonstrate how to deploy the application to Heroku.
// Example:
// bash
// Copy code
// # Steps to deploy to Heroku:
// heroku create
// git push heroku main
// 12. Testing and Debugging
// Definition: Testing ensures that the code behaves as expected, while debugging involves finding and fixing errors.
// Explanation: Write tests for Express applications using frameworks like Mocha, Chai, or Jest.
// Example:
// javascript
// Copy code
// const request = require('supertest');
// const express = require('express');
// const app = express();

// app.get('/test', (req, res) => {
//   res.status(200).send('Hello, Test!');
// });

// describe('GET /test', () => {
//   it('responds with Hello, Test!', (done) => {
//     request(app)
//       .get('/test')
//       .expect(200, 'Hello, Test!', done);
//   });
// });


// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

module.exports = router;


// routes/about.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the About Page!');
});

module.exports = router;


// routes/contact.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Contact us at contact@example.com');
});

module.exports = router;


// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

// Use routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
