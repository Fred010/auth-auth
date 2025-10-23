# Authentication & Authorization for Backend Systems

### **Project Title**

```
# Auth API
Authentication and Authorization API for Users, Admins, and Companies (3 Entities).
```

### **Description**

```
This backend service provides user, admin, and company authentication, including:
- Signup, login, logout
- JWT token authentication
- Email verification
- Password reset
```

### **Installation**

```
1. Clone the repository
   git clone https://github.com/the-username/repo.git

2. Navigate to project folder
   cd repo

3. Install dependencies
   npm install

4. Create a .env file with:
   JWT_SECRET=your_secret
   MONGODB_URI=your_mongo_uri
   FRONTEND_URL=http://localhost:3000
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
```

### **Running the server**

```
npm run dev
```

### **API Endpoints**

| Method | Route                 | Description                    |
| ------ | --------------------- | ------------------------------ |
| POST   | /api/user/signup      | Register a new user            |
| POST   | /api/user/login       | Login as a user                |
| GET    | /api/user/auth-status | Check if user is authenticated |
| POST   | /api/admin/signup     | Register a new admin           |
| POST   | /api/admin/login      | Admin login                    |
| POST   | /api/company/signup   | Register a new company         |
| POST   | /api/company/login    | Company login                  |

### **Testing**

```
Use Thunder Client or Postman to test API endpoints.
Ensure JWT tokens are sent in `Authorization: Bearer <token>` header for protected routes.
```

### **License**

```
MIT
```
