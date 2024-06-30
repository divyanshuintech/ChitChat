# ChitChat

Welcome to **ChitChat**, a real-time chat web application designed for seamless and secure communication. Built with modern web technologies, ChitChat provides an engaging and responsive user experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- **Real-time Messaging:** Instant chat with live updates.
- **User Authentication:** Secure login and registration using JWT and bcrypt.
- **Responsive Design:** Beautiful and adaptable UI with Tailwind CSS.
- **State Management:** Efficient state management using Zustand.
- **Database:** Robust data storage with MongoDB and Mongoose.

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js
- MongoDB

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/divyanshuintech/ChitChat.git
   cd ChitChat
2. **Install server dependencies:**
   ```sh
   cd backend
   npm install
3. **Install client dependencies:**
   ```sh
   cd ../frontend
   npm install
4. **Environment Variables:**
   Create a .env file in the backend directory and add following variables
   ```env
   PORT=5000
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET_KEY=your-jwt-secret
   NODE_ENV=development
5. **Run the server:**
   ```sh
   cd backend
   npm run server
6. **Run the client:**
   ```sh
   cd ../frontend
   npm run dev


## Usage
1.  Open your browser and go to http://localhost:3000.
2.  Register a new account or log in with existing credentials.
3.  Start chatting with your friends in real time!


## Technologies Used

### Frontend:
  * React
  * Tailwind CSS
  * Zustand

### Backend:
  * Node.js
  * Express
  * Socket.io
  * Mongoose
  * bcryptjs
  * jsonwebtoken


## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
