# 🔄 Repo-Reboot: Resurrecting Legacy Code

**Repo-Reboot** is a specialized developer tool built for the **iFest (DA-IICT) Hackathon**. It is designed to breathe new life into stale, unmaintained, or legacy repositories by automating documentation, analyzing technical debt, and optimizing project structures.

---

## ⚠️ The Problem: "Code Decay"
In the fast-paced world of software development, thousands of repositories become "stale" every day. New contributors face significant barriers:
* **Missing Documentation:** No README or outdated setup instructions.
* **Technical Debt:** Outdated dependencies and deprecated syntax.
* **Onboarding Friction:** High "time-to-first-commit" because the project structure is confusing.
* **Dependency Hell:** No clear view of what libraries are being used or if they are secure.

## ✅ The Solution: Repo-Reboot
I developed **Repo-Reboot** to act as an "Automated Repository Architect." It provides a 48-hour solution to revive any project:
* **Instant Intelligence:** Automatically identifies the tech stack, languages, and core dependencies without manual input.
* **Documentation-as-a-Service:** Generates a professional, structured README based on real-time file analysis.
* **Visual Onboarding:** Maps the project architecture so a new developer can understand the folder structure in seconds.
* **Actionable Modernization:** Suggests modern alternatives for outdated packages, reducing technical debt instantly.

---

## ✨ Key Features
* **Smart Analysis Engine:** Scans repository patterns to determine project purpose.
* **Tech Stack Auditor:** Detects Frameworks (React, Vue), Languages (JS, Python), and Tools.
* **Clean Code Bridge:** Transforms a "messy" repo into a production-ready, organized state.
* **Seamless Integration:** Built to work directly with the GitHub REST API for real-time repo fetching.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React.js (Vite) |
| **Styling** | Tailwind CSS / Framer Motion |
| **API Integration** | GitHub REST API |
| **Analysis** | Node.js / Custom Parsing Algorithms |
| **Deployment** | Vercel |

---

## 📂 Architecture
```text
repo-reboot/
├── src/
│   ├── components/       # Analysis Bars, Repo Cards, Dashboard
│   ├── hooks/            # GitHub API & Auth logic
│   ├── utils/            # The "Reboot Engine": File parsing & Readme logic
│   └── views/            # Results Visualization & Landing Page
└── public/               # Static assets & Branding
