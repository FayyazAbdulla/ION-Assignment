
### README.md

```markdown
# File Upload Dashboard

A simple web application that allows users to upload JSON files, view the uploaded files, download them, and delete them as needed. This project is built with a **Node.js** backend and a **React** frontend, utilizing **Mongoose** for MongoDB interactions.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Upload JSON files.
- Display uploaded files in a table format.
- Download files directly from the dashboard.
- Delete files, with immediate updates to the displayed list.
- Responsive design for usability.

## Technologies

- **Frontend**: 
  - React
  - Axios
  - Tailwind CSS
- **Backend**: 
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - Multer (for file uploads)
- **Others**:
  - SweetAlert2 (for user notifications)

## Installation

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file to set up your MongoDB connection (if needed).

4. Start the server:
   ```bash
   node server.js
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. **Upload Files**: Navigate to the upload section and choose a JSON file to upload.
2. **View Files**: After uploading, go to the Admin Dashboard to view all uploaded files.
3. **Download Files**: Click on the "Download" button next to each file to download it.
4. **Delete Files**: Click on the "Delete" button to remove a file from the server and update the list immediately.

## Directory Structure

### Backend
```
└── 📁backend
    └── 📁controllers
        └── fileController.js  # Handles file operations (upload, fetch, delete)
    └── 📁models
        └── fileModel.js        # Mongoose model for file schema
    └── 📁routes
        └── fileRoutes.js       # Defines API routes for file handling
    └── 📁uploads               # Directory where uploaded files are stored
        └── 1191-RDE11-ED-91901-Badulla.json
    └── package-lock.json
    └── package.json            # Dependencies and scripts for the backend
    └── server.js               # Entry point for the backend server
```

### Frontend
```
└── 📁src
    └── 📁assets
        └── react.svg          # Logo or other assets
    └── 📁controllers           # (Optional) Controllers for managing frontend logic
    └── 📁services              # (Optional) Services for API interactions
    └── 📁views
        └── 📁components
            └── Header.jsx     # Header component for navigation
        └── AdminDashboard.jsx  # Displays the admin dashboard with file operations
        └── FileTable.jsx       # Displays a table of uploaded files
        └── FileUpload.jsx      # Component for uploading files
    └── App.css                 # Global CSS styles
    └── App.jsx                 # Main application component
    └── index.css               # Index styles
    └── input.css               # Input styles
    └── main.jsx                # Entry point for the frontend
    └── output.css              # Output styles
```

## API Endpoints

| Method | Endpoint                          | Description                     |
|--------|-----------------------------------|---------------------------------|
| POST   | `/api/files/upload`              | Upload a new JSON file         |
| GET    | `/api/files/`                    | Get a list of all uploaded files|
| DELETE | `/api/files/:filename`           | Delete a specific file by name |

## License

This project is licensed under the MIT License. See the LICENSE file for details.

```
