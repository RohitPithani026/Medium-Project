
# 🌟 Medium Project - A Blogging Platform 

Welcome to the **Medium Project** repository — a full-stack web application where users can create, manage, and share articles. This project is a modern web development example of the power of **React**, **Node.js**, and **MongoDB**. It provides a smooth, interactive blogging experience with user authentication and Markdown support.

**Live Demo**: Check out the live site of the Medium Project here: [**Medium Project Live**](https://medium-project-iota.vercel.app/).

----------

## 💡 **Why Medium Project?**

Building this project helped in honing full-stack development skills and understanding the interplay between the front and back ends. In the journey to build a medium-like blog platform, I explored:


-   **Frontend**: Crafting interactive UIs with **React** and styled with **Tailwind CSS**.
-   **Backend**: API development and secure user authentication using **Hono** and **JWT**.
-   **Database**: Structuring data storage in **Postgres** for article management, with **Prisma** as the ORM.

By reflecting Medium’s core features, the app incorporates modern elements like **stateless JWT authentication**, **real-time updates**, and **Markdown rendering**, common in web applications for dynamic content.

----------

## 📂 **Table of Contents**

1.  [Overview](#overview)
2.  [Features](#features)
3.  [Tech Stack](#tech-stack)
4.  [Live Demo](#live-demo)
5.  [How It Works](#how-it-works)
6.  [How to Run It Locally](#how-to-run-it-locally)
7.  [Contributing](#contributing)
8.  [License](#license)
9.  [Connect](#connect)

----------

## 🔍 **Overview**

**The Medium Project** is designed to replicate the blogging platform’s simplicity, where users can:

-   **Read Articles**: View detailed articles posted by authors.
-   **Create and Edit Articles**: Authentic users can write their own articles and format them with Markdown.
-   **Markdown Rendering**: The text body supports Markdown to enhance the layout.
-   **User Authentication**: Registered users can securely log in and have personalized article feeds.

This app implements a full-stack solution with **React** on the frontend and **Hono** on the backend. Data is stored in **Postgres**, providing structured, reliable storage for articles and user details. Authentication is handled securely using **JWT** tokens. The backend APIs support the creation, reading, updating, and deleting of articles, while the frontend delivers a responsive, dynamic UI for the user.

----------

## 🚀 **Features**

-   **Secure Authentication**: JWT tokens handle login and registration functionality.
-   **Markdown Editor**: Compose articles with Markdown support for better readability.
-   **User Profile**: Each user has a personalized dashboard to create and manage their articles.
-   **Articles Management**: Users can create, read and update.
-   **Mobile Responsive**: Designed to function on any device seamlessly.


----------

## 🛠️ **Tech Stack**

The **Medium Project** uses the following technologies:

### **Frontend**:

-   **React.js** - Interactive UI rendering and state management.
-   **Tailwind CSS** - Custom styles and responsive themes.
-   **React Router** - Enables navigation between pages seamlessly, such as articles, profile, and login/signup screens.
-   **Axios** - Sending HTTP requests to the backend for article fetching and authentication.
-   **Vercel** - Hosting solution for seamless deployment.

### **Backend**:

-   **Hono** - API development and routing for authentication and article CRUD operations.
-   **Postgres** - Structured database for storing articles and user details.
-   **Prisma** - ORM for interacting with the database and simplifying SQL queries.

### **Authentication**:

-   **JWT (JSON Web Tokens)** - Provides secure stateless authentication by issuing a token upon login, which is passed for subsequent requests.

### **Other Libraries**:

- **Markdown-it** - Parsing Markdown to render article bodies.
-   **dotenv** - Handling environment variables to manage app configurations.

----------

## 🎥 **Live Demo**

Want to see the project in action? Head over to the deployed website for a fully functional preview: [**Live Demo**](https://medium-project-iota.vercel.app/)

You’ll be able to:

-   Sign up
-   Log in
-   Read published articles
-   Create your own articles
-   Edit your profile

----------

## 🏗️ **How It Works**

-  **Frontend (React)**:
    
    -   The UI is built using **React** and styled with **Tailwind CSS** to create a clean, responsive layout.
    -   Routing is handled by **React Router**, allowing seamless navigation between the articles, profile page, and login/signup screens.
-   **Backend (Hono & Prisma)**:
    
    -   The server is built with **Hono** for serverless backend support, which handles routing and APIs for authentication and article CRUD operations.
    -   Data is stored in **Postgres**, with structured data for articles and user details.
    -   **Prisma** serves as an ORM to interact with the database and simplify SQL queries.
-   **Authentication**:
    
    -   **JWT** is used for stateless authentication, where a token is issued upon successful login and passed for subsequent requests.

----------

## ⚙️ **How to Run It Locally**

1.  Clone the repository:
 
    `git clone https://github.com/RohitPithani026/Medium-Project.git`
    `cd Medium-Project` 
    
2.  Install dependencies in the root folder:
    
    `npm install` 
    
3.  Navigate to the client folder and install frontend dependencies:

    `cd client`
   `npm install` 
    
4.  Set environment variables in a `.env` file in the root folder:
  
5.  Start both the server and frontend:
    
    -   For the backend server:
       
        `npm run deploy` 
        
    -   For the frontend:
        
        `npm run dev` 
        

Your application will now be running on `http://localhost:3000`.

----------

## 🤝 **Contributing**

We welcome contributions from the open-source community! If you'd like to help improve this project, follow these steps:

1.  **Fork** the repo
    
2.  **Clone** your forked repo:
    
    `git clone https://github.com/your-username/Medium-Project.git` 
    
3.  Create a feature branch:
    
    `git checkout -b feature-name` 
    
4.  **Commit** your changes:
    
    `git commit -m "Description of your feature"` 
    
5.  **Push** to your branch:
    
    `git push origin feature-name` 
    
6.  **Create a Pull Request (PR)** to the original repository.
    

----------

## 🌐 **Connect with Me**

-   GitHub: [RohitPithani026](https://github.com/RohitPithani026)
-   Twitter (X): [@rohitpithani13](https://x.com/rohitpithani13)

----------

Ready to explore and enhance this project? 💡 Dive in and start contributing today!
