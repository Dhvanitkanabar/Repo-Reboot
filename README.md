# 🔄 Repo-Reboot

**Repo-Reboot** is an intelligent repository revitalization tool developed for the **iFest (DA-IICT) Hackathon**. It simplifies the developer onboarding process by automatically analyzing, documenting, and optimizing legacy or unmaintained codebases.

---

## 📖 Project Overview
The "Repo Reboot" challenge at iFest required a solution to handle technical debt. This platform acts as a bridge for developers, transforming a "stale" repository into a clean, well-documented project with actionable insights.

### 🚀 Key Features
* **Automated README Engine:** Generates structured documentation by parsing project files.
* **Tech Stack Auditor:** Identifies languages, frameworks, and outdated dependencies instantly.
* **Structure Visualization:** Maps out the project directory to help new contributors navigate the codebase.
* **Refactor Suggestions:** Flags complex functions and suggests modern syntax improvements.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React.js (Vite) |
| **Styling** | Tailwind CSS / Framer Motion |
| **API Integration** | GitHub REST API |
| **Analysis** | Node.js File System (FS) Parsing Logic |
| **Deployment** | Vercel |

---

## 📂 Architecture
```text
repo-reboot/
├── src/
│   ├── components/       # Dashboard, Analysis Cards, Repo Search
│   ├── hooks/            # GitHub API Fetching & Rate Limit handling
│   ├── utils/            # Logic for parsing file extensions & Readme generation
│   └── views/            # Landing Page & Result Visualization
└── public/               # Icon assets and Hackathon branding
