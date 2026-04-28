# 🍔 AuraMart

AuraMart is a modern, responsive food delivery and restaurant discovery web application. Built with React and Vite, it allows users to explore local restaurants, view detailed menus, and manage their food cart in a seamless Single Page Application (SPA) environment.

## ✨ Features

- **Dynamic Routing:** Utilizes `react-router-dom` for smooth, page-refresh-free navigation between the home feed, restaurant menus, and the cart.
- **Custom React Hooks:** Abstracts complex logic using reusable hooks like `useRestaurantMenu` (for data fetching) and `useOnlineStatus` (for real-time network detection).
- **Shimmer UI Loading:** Provides a highly engaging user experience by displaying a modern skeleton loading state (Shimmer) while waiting for API responses.
- **Cart Management:** Users can dynamically browse menus and add items to their cart.
- **Hybrid Component Architecture:** Showcases a strong grasp of React by utilizing both modern functional components (with hooks) and legacy class-based components (`UsersClass.jsx`).
- **Offline Awareness:** Automatically detects and alerts the user if they lose their internet connection.

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Build Tool/Bundler:** Vite
- **Routing:** React Router DOM
- **Styling:** Vanilla CSS3

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites
Make sure you have Node.js installed on your system.
- [Node.js](https://nodejs.org/) (v16 or higher recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/AuraMart-React.git](https://github.com/your-username/AuraMart-React.git)

2. **Navigate to the project directory:**
   ```bash
   cd AuraMart-React

3. **Install dependencies:**
   ```bash
   npm install

4. **Start the development server:**
   ```bash
   npm run dev

5. **Open your browser:**
   Navigate to http://localhost:5173 to view the app in action.

## 📂 Project Structure

src/
├── components/          # Reusable UI components (Header, Body, Cart, etc.)
│   ├── RestaurantMenu.jsx
│   ├── RestrauntCard.jsx
│   ├── Shimmer.jsx      # Loading UI skeleton
│   └── ...
├── utils/               # Helper functions, constants, and Custom Hooks
│   ├── useOnlineStatus.js
│   ├── useRestaurantMenu.js
│   ├── mockdata.js      # Fallback JSON data
│   └── constants.js
├── App.jsx              # Main application entry component
└── index.css            # Global styling
