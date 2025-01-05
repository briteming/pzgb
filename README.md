# GithubBlog

![Completed](https://img.shields.io/badge/status-completed-brightgreen)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![2025-01-0517-02-47-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/f0f21507-9357-4b9b-8e89-ddd14ddf2939)

## 📜 Description

This project is a blog application that fetches data from the GitHub API to display issues as blog posts. It also retrieves user profile information and provides a clean, functional interface for browsing posts. Each issue in a GitHub repository acts as a blog post, with the issue title as the post title and its body as the post content.

## 💻 Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Styled-Components**: For styling components with CSS-in-JS.
- **Vite**: A fast build tool for modern web projects.
- **React Hook Form**: Simplifies form management and validation.
- **React Router**: Enables dynamic routing in the application.
- **Octokit**: For interacting with the GitHub API.
- **React Markdown**: Renders markdown content as HTML.
- **use-context-selector**: Optimizes context selection for better performance and maintainability.

## ⚙️ Features

- Display GitHub user profile with avatar, follower count, and additional details.
- List and filter issues from a GitHub repository with summarized content.
- View detailed content of a single issue in a dedicated post page.
- Markdown formatting support for post content.

## 🛠️ Installation

### Prerequisites

- **Node.js (version 16 or above)**
- **npm (Node.js package manager)**
- **A GitHub personal access token (GitHub Token) to authenticate API requests**
- **Environment variables for repository configuration:**

```bash
VITE_GITHUB_TOKEN: Your GitHub token.
VITE_GITHUB_OWNER: The GitHub username or organization.
VITE_GITHUB_REPO: The repository name.
```

1. Clone the repository:

```bash
git clone https://github.com/your-username/github-blog.git
```

2. Navigate into the project directory:

```bash
cd github-blog
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file in the project root and add the required environment variables:
   You can generate a token by following GitHub's documentation.

```bash
VITE_GITHUB_TOKEN=your_github_token
VITE_GITHUB_OWNER=your_github_username
VITE_GITHUB_REPO=your_repository_name
```

5. Run the development server:

```bash
npm run dev
```

6. Open your browser and visit:

```bash
http://localhost:5173/
```

## 🤝 Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a branch for your changes.
3. Make your changes and submit a pull request.

## 📄 License

This project is open source and available under the MIT License.
