# Blog Management System

This is a **simple blog management system** built with **Node.js** and **Express.js**, allowing users to **create, edit, and view articles**. The system includes an **admin panel** for managing posts and supports authentication using an API key.

---

## 🚀 Features
- View a list of all articles
- Read full articles with detailed content
- Add new articles
- Edit existing articles
- Simple authentication via API key for admin access

---

## 💻 Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript Templates), HTML, CSS
- **Middleware:** Body-parser

---

## 🎨 UI Design
The UI layout was improved with the help of **AI**, but all the **backend logic and routing were implemented manually**. The AI assistance was specifically used for:
- Enhancing the **form structure** and **layout**
- Improving **typography and styling**
- Optimizing **user experience**

Everything else, including **server logic, authentication, routing, and data handling**, was written manually.

---

## 📌 Installation & Usage

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/blog-management.git
cd blog-management
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Server
```sh
node index.js
```
The app will run on `http://localhost:3000`

---

## 🔑 Admin Access
To access the **admin panel**, add the following query parameter to the URL:
```
http://localhost:3000/admin?api=A12345B12
```
This allows you to **create, edit, and manage articles**.

---

## 🛠 Endpoints Overview

### 📖 Public Routes
| Method | Route          | Description          |
|--------|--------------|----------------------|
| GET    | `/home`       | View all articles   |
| GET    | `/post/:id`   | View a full article |

### 🔑 Admin Routes (Requires API Key)
| Method | Route           | Description              |
|--------|---------------|--------------------------|
| GET    | `/admin`       | Admin panel (API key required) |
| GET    | `/new`         | Form to create an article |
| POST   | `/new`         | Save a new article |
| GET    | `/edit/:id`    | Form to edit an article |
| POST   | `/edit/:id`    | Save changes to an article |

---

## 📌 Future Improvements
- Implement **database storage** instead of an in-memory array.
- Add **user authentication** for better security.
- Enhance **mobile responsiveness** for a better user experience.
- Improve the **editor UI** with a markdown editor.

---

## 📜 License
This project is open-source and available for modification.

---

## Project link

Project link from roadmap.sh: https://roadmap.sh/projects/personal-blog

Happy coding! 🚀

