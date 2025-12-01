📘 MERN Stack Blog App

This is a full-stack Blog Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
Users can register, log in and securely create, read, update, and delete blog posts.

🔗 Live Demo → https://mernstackblogapp1.netlify.app/auth

🚀 Features
🔐 Authentication

User Registration & Login

JWT based Authentication

Secure Password Hashing (bcrypt)

Protected API Routes

📝 Blog Management (CRUD)

Create blog posts

Display all blogs

View single blog post

Update blog post

Delete blog post

🎨 UI & UX

Responsive design

User-friendly blog editor

Toast notifications and UI alerts

🧩 Tech Stack
Layer	Technology
Frontend	React.js, Axios, React Router
Backend	Node.js, Express.js
Database	MongoDB + Mongoose
Authentication	JWT, bcrypt
Deployment	Netlify (Frontend), Render/Heroku (Backend if used)
📦 Setup Instructions (For Local Development)
1️⃣ Clone the Repository
git clone https://github.com/YourUsername/MERN-Blog-App.git
cd MERN-Blog-App

2️⃣ Backend Setup
cd server
npm install


Create a .env file and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Run Backend:

npm start

3️⃣ Frontend Setup
cd client
npm install
npm start


Frontend runs on: http://localhost:3000

Backend runs on: http://localhost:5000

📁 Folder Structure
MERN-Blog-App
 ├── client (React Frontend)
 ├── server (Express Backend)
 ├── README.md

🛡️ API Routes Overview
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	User login
POST	/api/blog/create	Create blog post
GET	/api/blog/getall	Get all blogs
GET	/api/blog/:id	Get single blog
PUT	/api/blog/update/:id	Update blog
DELETE	/api/blog/delete/:id	Delete blog

⚠️ JWT Token required for protected blog routes.

📸 Screenshots (Optional)

Add UI screenshots here later to make README more attractive.

🤝 Contributing

Contributions and suggestions are welcome!
Feel free to fork this project and create a pull request.

📜 License

This project is licensed under the MIT License.

🌟 Show Support

If you like this project, give it a ⭐ on GitHub! 😊
