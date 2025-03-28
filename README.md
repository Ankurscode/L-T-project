# To-Do List Application

A modern, responsive to-do list application with animated background and local storage functionality.

## Features

- Add, complete, and delete tasks
- Persistent storage using localStorage
- Animated gradient background
- Responsive design
- Modern UI with Bootstrap

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (with animations)
  - JavaScript (ES6+)
  - jQuery 3.6.0
  - Bootstrap 5.3.0

- **Backend**:
  - Node.js
  - Express.js
  - Nodemon (for development)

## Prerequisites

Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ankurscode/L-T-project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd L-T-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
To run the application in development mode with auto-reload:
```bash
npm run dev
```

### Production Mode
To run the application in production mode:
```bash
npm start
```

After starting the server, open your browser and visit:
```
http://localhost:3000
```

## Usage

1. Enter a task in the input field
2. Click "Add Task" or press Enter to add the task to your list
3. Click "Complete" to mark a task as done
4. Click "Delete" to remove a task
5. Tasks are automatically saved and will persist even after closing the browser

## Project Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles and animations
- `script.js` - Frontend JavaScript logic
- `server.js` - Express server configuration
- `package.json` - Project dependencies and scripts
