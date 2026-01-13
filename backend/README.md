# ARTS Backend

This is the backend API for the Audit Recommendation Tracking System (ARTS).

## Setup

1. Install dependencies: `npm install`
2. Set up MongoDB (local or cloud)
3. Create .env file with MONGO_URI, JWT_SECRET, PORT
4. Run: `npm start` or `npm run dev`

## API Endpoints

- **Auth**: /api/auth
  - POST /register
  - POST /login
  - GET /user

- **Recommendations**: /api/recommendations
  - GET /
  - POST /
  - PUT /:id
  - DELETE /:id

- **Departments**: /api/departments
  - GET /
  - POST /

- **Users**: /api/users
  - GET /
  - PUT /:id

## Models

- User: name, email, password, role, department
- Department: name, abbreviation, description
- Recommendation: audit details, status, etc.