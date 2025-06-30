# a-store

**a-store** is a full-featured E-commerce platform with an admin dashboard, built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User authentication & authorization (JWT)
- Product catalog with search & filtering
- Shopping cart & checkout process
- Order management
- Admin dashboard for managing products, orders, and users
- Responsive design

## Tech Stack

- **Frontend:** React, Redux, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/arafatDU/a-store.git
  cd a-store
  ```

2. Install dependencies for both client and server:
  ```bash
  cd server
  npm install
  cd ../client
  npm install
  ```

3. Set up environment variables in `.env` files for both client and server.

4. Start the development servers:
  ```bash
  # In /server
  npm run dev

  # In /client
  npm start
  ```

## Folder Structure

```
a-store/
  ├── client/   # React frontend
  └── server/   # Express backend
```

## License

This project is licensed under the MIT License.

## Author

[Arafat Hussain](https://github.com/arafatDU)