
# 🎯 **To-Do List Application**  
_A MERN Stack Project built to demonstrate full-stack development expertise._

---

## 🚀 **Overview**

This project is a **To-Do List application** developed using the **MERN stack** (MongoDB, Express.js, React.js with Vite, and Node.js). The app allows users to manage tasks efficiently with features like adding, editing, marking as completed, and deleting tasks. Tasks are stored in a MongoDB database, making them persistent across sessions.

---

## 🛠️ **Features**
✅ **Add New Tasks**: Create tasks effortlessly with a simple form.  
✅ **View Tasks**: View all tasks categorized as **Active** or **Completed**.  
✅ **Mark Tasks**: Mark tasks as completed or revert them back to active.  
✅ **Edit Tasks**: Update task titles directly from the UI.  
✅ **Delete Tasks**: Permanently remove tasks from the list.  
✅ **Responsive Design**: Works seamlessly across devices (desktop and mobile).  

---

## 📂 **Tech Stack**

| Frontend         | Backend          | Database       | Tools             |
|-------------------|------------------|----------------|-------------------|
| React.js (Vite)  | Node.js          | MongoDB Atlas  | Axios             |
| CSS              | Express.js       | Mongoose       | React Icons       |

---

## 🎯 **Demo**

📍 **Local Setup**: Follow the steps below to run the project locally.

---

## 🔧 **Setup & Installation**

### 1️⃣ Prerequisites  
Before starting, ensure you have the following installed:  
- **Node.js**: [Download Here](https://nodejs.org/)  
- **MongoDB Atlas Account**: [Sign Up Here](https://www.mongodb.com/cloud/atlas)  

---

### 2️⃣ Clone the Repository  
```bash
git clone https://github.com/Amjad0202/to_do_list_app.git
cd to_do_list_app
```

---

### 3️⃣ Backend Setup  
1. Navigate to the `todo-backend` folder:  
   ```bash
   cd todo-backend
   ```
2. Install the required dependencies:  
   ```bash
   npm install
   ```
3. Create a `.env` file in the `todo-backend` folder with the following content:  
   ```plaintext
   MONGO_URI=<your-mongodb-connection-string>
   PORT=5000
   ```
4. Start the backend server:  
   ```bash
   npx nodemon server.js
   ```
   The backend will be available at `http://localhost:5000`.

---

### 4️⃣ Frontend Setup  
1. Navigate to the `todo-frontend` folder:  
   ```bash
   cd todo-frontend
   ```
2. Install the required dependencies:  
   ```bash
   npm install
   ```
3. Start the Vite development server:  
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

---

## 📋 **How to Use**

1. Open your browser and navigate to `http://localhost:5173`.  
2. **Add Tasks**: Use the input field to add new tasks.  
3. **View Tasks**: Tasks are automatically categorized into **Active** and **Completed**.  
4. **Edit Tasks**: Click on a task to update its title.  
5. **Complete Tasks**: Use the checkbox to mark tasks as done or revert them.  
6. **Delete Tasks**: Remove tasks permanently using the trash icon.

---

## ✨ **Optional Features Implemented**
- **Categorized Views**: Active and completed tasks are displayed in separate sections for better clarity.  
- **Inline Editing**: Task titles can be edited directly in the UI.  
- **Error Handling**: Proper messages are shown for API errors or invalid inputs.  
- **Mobile Responsiveness**: The app works seamlessly across different screen sizes.  

---

## 📸 **Screenshots**

### 🖼️ Add Task
![image](https://github.com/user-attachments/assets/2b54ca3b-9275-47ef-8e58-b4c729548e93)
 

### 🖼️ Active & Completed Tasks
![image](https://github.com/user-attachments/assets/dbc0030c-81cb-4eba-b89f-ea4272d634cd)
![image](https://github.com/user-attachments/assets/db02036e-94eb-41a2-a19d-ba47d9f2a14c)


---

## 🔮 **Future Enhancements**
- **User Authentication**: Personalized task management with login/signup.  
- **Sorting and Filtering**: Filter tasks based on priority or due dates.  
- **Drag and Drop**: Reorder tasks by dragging.  
- **Dark Mode**: Add a theme toggle for better UI experience.  

---


## 🌟 **Contributors**
- **Mohamed Amjad**  
  Connect on [LinkedIn](https://www.linkedin.com/in/mohamedamjad/) or email at mamamjadali@gmail.com.

---
