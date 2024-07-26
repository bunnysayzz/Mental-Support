# Project Title: MindCircle

## Overview
MindCircle is a web application designed to facilitate the management and sharing of readable materials. It consists of a backend built with Node.js and Express, and a frontend developed using React.

## Screenshots
![Login Page](src/assets/screenshots/scr1.png)
![Main Page](src/assets/screenshots/scr2.png)

## Features
- User authentication
- File upload to Cloudinary
- Management of readable materials
- Responsive design

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (for database)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```
   CLOUD_NAME=your_cloud_name
   CLOUD_API_KEY=your_api_key
   CLOUD_API_SECRET=your_api_secret
   MONGODB_URI=your_mongodb_uri
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm start
   ```

## Usage
- Access the application at `http://localhost:3000` in your web browser.
- Use the login page to authenticate and access the main features of the application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
