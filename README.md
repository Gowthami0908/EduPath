# EduPath
# 📘 EduPath: AI Learning Path Recommender

EduPath is an AI-powered web application that provides personalized learning paths and quizzes based on the user's learning goal and current skills. It is designed to guide students step-by-step on what to learn next, and evaluate them through quizzes.

---

## 🎯 Purpose

Traditional education is often one-size-fits-all. EduPath personalizes learning by recommending tailored roadmaps based on individual goals and skills using AI, making self-learning more structured and efficient.

---

## 🔍 Features

- ✨ **AI-Based Learning Path Generator**  
  Generates a customized learning roadmap based on user's goal and existing knowledge.

- 🧠 **Quiz Generator**  
  Creates multiple-choice quizzes based on selected topics and difficulty levels to reinforce learning.

- 📘 **Resource Recommendations**  
  Suggests links to tutorials, courses, and coding platforms relevant to the roadmap.

---

## 🌐 Live Demo

👉 [https://your-deployed-link.vercel.app](https://your-deployed-link.vercel.app)

---

## 💻 Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| Frontend     | React.js, Tailwind CSS |
| Backend      | Node.js, Express.js  |
| AI           | OpenAI GPT-3.5 (Mocked i

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/edupath.git
cd edupath
cd server
npm install
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000
Start backend:

bash
Copy
Edit
node index.js
Frontend (React)
bash
Copy
Edit
cd ../client
npm install
npm start
3. Usage
Visit: http://localhost:3000

Enter your learning goal and current skills.

Click Generate Learning Path.

Use the quiz tab to generate topic-based MCQs.

🧪 Testing (Optional)
You can test the API separately using tools like Postman:

bash
Copy
Edit
POST http://localhost:5000/api/generate-path
Body: { "goal": "web development", "skills": "html, css" }
📦 Deployment
Frontend: Deploy client/ on Vercel

Backend: Deploy server/ on Render

📜 License
This project is for educational and hackathon use only.

🙋‍♀️ Made by
Gowthami – B.Tech CSSE
Hackathon Project – Theme: Personalized Education – AI-Powered Learning
