# Notes-App
A simple full-stack app where users can create, edit, delete, and search notes.

# INSTALLATION GUIDE - Notes App

## 1. Requirements
- Node.js (v18+)
- Git
- Any code editor (VS Code recommended)

## 2. Clone the project
- git clone https://github.com/paulagjantunen-hue/Notes-App.git
- cd Notes-App

## 3. Install backend
- cd backend
- npm install
- node server.js
Backend runs at:
http://localhost:3000/api

## 4. Install frontend
Open a second terminal:
- cd frontend
- npm install
- npm run dev
Frontend runs at:
http://localhost:5173

## 5. Using the app
- Create notes
- Delete notes
- Search notes
- All data saved locally in `backend/notes.db`

## 6. Troubleshooting
If you get errors:
- Delete `notes.db`
- Run backend again
- Make sure ports 3000 and 5173 are free

## 7. Optional
You can edit:
- `frontend/src/api.js` → change backend URL
- `backend/routes.js` → add new endpoints
- `frontend/src/components` → customize UI