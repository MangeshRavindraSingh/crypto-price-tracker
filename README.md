# Crypto Price Tracker

## Overview

This project consists of a frontend and a backend application to collect and display real-time price data for cryptocurrencies. The backend polls data from an external API and stores it in a MongoDB database. The frontend fetches the most recent data entries and displays them in a form of table which updates real-time.

## Prerequisites

Before starting the project, ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB (>= 4.x)

## Backend

### Setup and Run

1. **Clone the repository:**
    ```sh
    git clone https://github.com/MangeshRavindraSingh/crypto-price-tracker.git
    cd crypto-price-tracker
    ```

2. **Navigate to the backend directory:**
    ```sh
    cd Backend
    ```

3. **Install the dependencies:**
    ```sh
    npm install
    ```

4. **Create a `.env` file in the `Backend` directory and add your configuration:**
    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/crypto_price_tracker
    COINGECKO_API=https://api.coingecko.com/api/v3/simple/price
    ```

5. **Start the backend server:**
    ```sh
    cd src
    node index
    ```

6. **Backend server will be running at:**
    ```
    http://localhost:5000
    ```

## Frontend

### Setup and Run

1. **Navigate to the frontend directory:**
    ```sh
    cd Frontend
    ```

2. **Install the dependencies:**
    ```sh
    npm install
    ```

3. **Create a `.env` file in the `Frontend` directory and add your configuration:**
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

4. **Start the frontend server:**
    ```sh
    npm start
    ```

5. **Frontend server will be running at:**
    ```
    http://localhost:5173
    ```