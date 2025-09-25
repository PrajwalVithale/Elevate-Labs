# 📚 Task3 — Books REST API + Next.js Frontend

## 📖 Summary
This project contains both backend and frontend for a simple **Books CRUD app**.

- **Backend**: Express.js Books API (`server.js`) — simple in-memory demo.
- **Frontend**: Next.js (App Router) with CRUD UI, Search, Sort, and Pagination.

---

## 🚀 Getting Started

### 🔹 Backend (API)
```bash
cd books-api    # folder containing server.js
npm install
npm run dev     # runs at http://localhost:4000


### Frontend

cd my-books-frontend
npm install

# Create .env.local in root:
NEXT_PUBLIC_API_URL=http://localhost:4000

npm run dev    # runs at http://localhost:3000


### 📡 API Endpoints

GET /books → fetch all books
POST /books → add book { title, author }
PUT /books/:id → update book
DELETE /books/:id → delete book


### ✨ Features

✅ CRUD operations (Add / Edit / Delete)
🔍 Search by title or author
🔃 Sort A–Z / Z–A
📄 Pagination for long lists
🎨 Modern UI with blurred book background & hover effects


🖼️ Screenshots

[Books List](Task3/SS_Task-3.png)

Books List
Add Book
Search + Sort

## ⚠️ Notes
- `.env.local` must be created manually and should not be committed.  
- `node_modules/` and build folders are ignored with `.gitignore`.  

## 👨‍💻 Contribution
- Clone the repo  
- Run backend + frontend as described above  
- Future improvements: DB integration, better error handling, deployment

## 🏷️ License
This project is created for educational and internship task purposes only.  
Not intended for production use.
