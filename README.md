# 📈 Zerodha Trading Platform Clone

A full-stack **Zerodha-inspired trading platform** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
The project provides a modern trading dashboard where users can view holdings, positions, orders, and manage their portfolio through an interactive interface.

## 🚀 Live Demo

### 🌐 Frontend / Dashboard

**[zerodha-trading-platformm.netlify.app](https://zerodha-trading-platformm.netlify.app/)**

> ⚠️ This project is created for educational and portfolio purposes and is **not affiliated with or endorsed by Zerodha**.

---

## ✨ Features

### 🔐 Authentication

* User login system
* Backend API authentication
* Secure communication between frontend and backend
* Environment variable support for sensitive configuration

### 📊 Trading Dashboard

* Interactive dashboard
* Portfolio overview
* Holdings management
* Positions tracking
* Orders management
* Stock-related information display

### 💼 Holdings

* View stocks currently held
* Display quantity and average price
* Track investment-related information
* Calculate portfolio values

### 📑 Positions

* View active trading positions
* Display buy/sell information
* Track quantity and price information
* Profit/loss representation

### 🛒 Orders

* Place trading orders through the dashboard
* Store orders in MongoDB
* Display order information
* Manage order records

### 🎨 Responsive UI

* Clean Zerodha-inspired design
* Responsive layout
* Bootstrap-based styling
* User-friendly navigation
* Dashboard-oriented interface

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React.js
* 🟦 JavaScript
* 🎨 Bootstrap
* 🔗 Axios
* 🧭 React Router

### Backend

* 🟢 Node.js
* 🚂 Express.js
* 🔗 REST APIs
* 🔐 CORS
* 📦 Body Parser

### Database

* 🍃 MongoDB
* 🦋 Mongoose
* ☁️ MongoDB Atlas

### Deployment

* ▲ Netlify — Frontend
* ☁️ MongoDB Atlas — Database

---

## 📂 Project Structure

```text
Zerodha/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── media/
│       ├── App.js
│       └── index.js
│
├── dashboard/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
│
├── backend/
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── PositionsModel.js
│   │   └── OrdersModel.js
│   │
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🔄 Application Architecture

```text
                 ┌──────────────────────┐
                 │      React.js        │
                 │      Frontend        │
                 └──────────┬───────────┘
                            │
                            │ Axios / REST API
                            ▼
                 ┌──────────────────────┐
                 │     Express.js       │
                 │      Backend         │
                 └──────────┬───────────┘
                            │
                            │ Mongoose
                            ▼
                 ┌──────────────────────┐
                 │       MongoDB        │
                 │    MongoDB Atlas     │
                 └──────────────────────┘
```

---

## 🔌 API Communication

The frontend communicates with the backend using **Axios**.

Example:

```javascript
axios.get("http://localhost:8080/allHoldings");
```

The backend processes the request and retrieves the required data from MongoDB.

---

## 🗄️ Database Models

The project currently uses models such as:

### Holdings

Stores information about stocks held by users.

```text
Stock
Quantity
Average Price
Current Price
Net
Day Change
```

### Positions

Stores active trading positions.

```text
Product
Name
Quantity
Average
Price
Net
Day
```

### Orders

Stores user trading orders.

```text
Name
Quantity
Price
Mode
Order Type
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-zerodha-repository.git
```

```bash
cd Zerodha
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file inside the backend directory:

```env
MONGO_URL=your_mongodb_connection_string
PORT=8080
```

> Never upload your `.env` file or database credentials to GitHub.

---

### 4. Start Backend

```bash
npm start
```

or

```bash
node index.js
```

---

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

Start the frontend:

```bash
npm start
```

---

### 6. Start Dashboard

If the dashboard is maintained separately:

```bash
cd dashboard
npm install
npm start
```

---

## 🔐 Environment Variables

Example:

```env
MONGO_URL=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/Zerodha
PORT=8080
```

Make sure `.env` is included in `.gitignore`:

```text
node_modules/
.env
```

---

## 📸 Project Highlights

### 🏠 Landing Page

A clean Zerodha-inspired landing page introducing the platform.

### 📊 Dashboard

Interactive trading dashboard displaying portfolio information.

### 💼 Holdings

Users can view their current stock holdings and investment details.

### 📈 Positions

Displays active trading positions along with relevant trading information.

### 🛒 Orders

Users can place and view trading orders through the platform.

---

## 🎯 Learning Objectives

This project helped me strengthen my understanding of:

* React.js component architecture
* REST API development
* Express.js backend development
* MongoDB database integration
* Mongoose schemas and models
* Axios API communication
* React Router
* CRUD operations
* Authentication concepts
* Frontend-backend integration
* Environment variables
* Full-stack project deployment
* Git and GitHub workflow

---

## 🔮 Future Improvements

Some features that can be added in future versions:

* [ ] Real-time stock prices
* [ ] User registration
* [ ] JWT authentication
* [ ] Watchlist functionality
* [ ] Advanced stock charts
* [ ] Buy/Sell transaction history
* [ ] Real-time P&L updates
* [ ] Payment integration
* [ ] WebSocket-based live updates
* [ ] Mobile-responsive dashboard improvements

---

## 📚 Project Purpose

This project was developed as a **full-stack development project** to understand how a modern trading platform can be structured using the MERN stack.

It demonstrates the integration of:

**React → Axios → Express → Node.js → MongoDB**

---

## 👨‍💻 Author

### **Arpit Srivastava**

🎓 B.Tech — Computer Science & Engineering

💻 MERN Stack Developer

### Skills

`C` `C++` `Java` `JavaScript` `React.js` `Node.js` `Express.js` `MongoDB` `MySQL` `Git` `GitHub`

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## ⚠️ Disclaimer

This is an **educational Zerodha-inspired project** developed for learning and portfolio purposes.

It does not represent the actual Zerodha trading platform and should not be used for real financial transactions.

---

### 🌐 Live Project

**[Visit Zerodha Trading Platform →](https://zerodha-trading-platformm.netlify.app/)**

---

**Made with ❤️ by Arpit Srivastava**
