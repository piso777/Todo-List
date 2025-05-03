
# 📝 React To-Do List App

A simple yet functional task management app built with **React**. It allows users to add, edit, complete, and filter tasks. This project demonstrates the use of React Router, Context API, and modular component design.

## 🚀 Features

- ✅ Add new tasks
- 🖊️ Edit existing tasks
- ✔️ Mark tasks as completed
- 🔍 Filter by:
  - All Tasks
  - Completed Tasks
  - Not Completed Tasks
- 🧠 Global state management using Context API
- 🎨 Bootstrap styling + FontAwesome icons

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── allTasks/
│   ├── completedTasks/
│   ├── notCompletedTasks/
│   ├── addingNewTask/
│   ├── home/
│   └── tasksBody/
│       ├── taskActionBtn/
│       ├── taskStatusBtn/
│       └── ...
├── contexts/
│   └── tasksContexts.js
├── App.js
└── index.js
```

## 🛠️ Technologies Used

- React (Functional Components & Hooks)
- React Router (`react-router-dom`)
- Context API
- Bootstrap (CSS)
- FontAwesome (Icons)

## 🔧 Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

## 🧪 Testing

Currently no testing framework is configured. You can add `Jest` or `React Testing Library` for testing purposes.

## 📦 Production Build

```bash
npm run build
```

## ✨ GitHub Tips for This Project

- **Add `.gitignore`** file:
  ```
  node_modules
  build
  .env
  ```
- **Commit Best Practices:**
  - Use descriptive commit messages
  - Commit small, functional changes
- **Create GitHub Repo:**
  ```bash
  git init
  git remote add origin https://github.com/your-username/todo-list-app.git
  git add .
  git commit -m "Initial commit"
  git push -u origin main
  ```

## 🙌 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/) 