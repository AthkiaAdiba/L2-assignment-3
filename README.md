# Blog Project

Blog Project is a robust server-side application designed to power the operations of an e-commerce platform specializing in blogs. Built with modern web technologies, it provides a secure, scalable, and efficient backend solution to manage data and handle client requests.

## 🚀 Live Demo

https://l2-assignment-3-rho.vercel.app

## ✨ Features

- 🌐 **RESTful API:** Provides endpoints for blog add, get, update, delete, and more.

- 🛠️ **CRUD Operations:** Full support for creating, reading, updating, and deleting blogs.

- 🔒 **Secure Environment:** Securely manage environment variables with dotenv.

- 📦 **Error Handling:** Comprehensive error responses for better debugging and API usage.

- 🗂️ **Categorization:** Query blogs by title, content, createdAt and other fields.

- 🛡️ **Secure Database Operations:** Data stored and managed securely using MongoDB.

- 👤 **Admin and User role:** Admin and user role have been implemented.

- ⚙️ **Scalable Design:** Built to handle growing demands and datasets.

## 🛠️ Technologies Used

### Backend Framework

- **Node.js:** High-performance runtime for building scalable applications.
- **Express.js:** Framework for creating RESTful APIs efficiently.

### Database

- **MongoDB:** NoSQL database for secure and flexible data storage.
- **Mongoose:** Elegant ODM for MongoDB, enabling schema validation and easy database interactions.

### Development Tools

- **TypeScript:** Ensures type safety, enhancing code maintainability.
- **ts-node-dev:** Hot-reloading during development for faster iterations.
- **ESLint & Prettier:** For consistent code style and quality checks.
- **dotenv:** Manages environment variables securely.
- **Secure Authentication**: Implemented **JWT (JSON Web Token)** for robust user authentication and authorization, ensuring secure access to protected routes and resources.
- **Input Validation**: Integrated **Zod** for schema-based validation of user and blog inputs, ensuring data integrity and preventing invalid data from entering the system.

## ⚙️ Installation and Setup

Follow these steps to set up and run the backend server locally:

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (Ensure MongoDB is installed and running locally or use a remote database)

### Clone the Repository

```bash
git clone https://github.com/AthkiaAdiba/L2-assignment-3.git
cd L2-assignment-3
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory with the following structure:

```bash
MONGO_URI=your_database_url
PORT=5000
JWT_ACCESS_SECRET=your_access_secrete
JWT_ACCESS_EXPIRES_IN=your_access_expires_duration
```

### Run the Server

#### Development Mode

```bash
npm run start:dev
```

#### Production Mode

```bash
npm run build
npm run start:prod
```

## 🔗 Scripts

- `npm run start:dev`: Starts the development server with hot reloading.

- `npm run start:prod`: Starts the production server.

- `npm run build`: Compiles TypeScript into JavaScript.

- `npm run lint`: Checks code for linting issues.

- `npm run lint:fix`: Automatically fixes linting issues.

- `npm run prettier:fix`: Formats the codebase using Prettier.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`)
4. Push your changes (`git push origin feature-branch`).
5. Open a Pull Request.

## 📜 License

This project is licensed under the **ISC License**.

## 📞 Contact

For any queries or feedback, feel free to reach out:
Email: athkiaadiba@gmail.com
