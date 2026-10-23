# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Recruiters and hiring managers** screening for AI/ML/data roles. They skim quickly and want to see role fit, stack, experience and a resume they can download.
- **Engineering leads and technical interviewers** who go deeper into projects: what was built, how, with which models or tools, and where the code lives.
- **Peers and the developer community** who arrive from GitHub or LinkedIn and want to see Suprava's work and get in touch.

## Product Purpose

Personal tech portfolio for Suprava Dutta, an AI / ML / data engineer at the start of their career. They're in the 6th semester of a B.Tech in CSE at IEM Kolkata and studying alongside for a BS at IIT Madras, with the main focus on multi-agent and LLM systems. It presents skills, experience, education and projects in one place. It succeeds when a visitor leaves with a clear picture of what Suprava builds and takes one of three actions: downloads the resume, goes on to GitHub or LinkedIn, or makes contact by email.

## Positioning

A single engineer's own record of their AI/ML/data work, made distinct by a visual identity taken from their photo (see Brand Commitments) rather than a generic developer template.

## Operating Context

- Visitors arrive from job applications, LinkedIn, GitHub profiles and shared links, on both desktop and mobile.
- Recruiters often give a page only a few seconds, so the resume and role must be reachable straight away.
- Technical reviewers open project links (repos, demos) in new tabs.

## Capabilities and Constraints

- **Built with:** Astro 7 with strict TypeScript, using Bun as the package manager.
- **Hosting:** GitHub Pages, so the site must build as static output. There's no server rendering, no API routes and no server-side form handling. A contact form, if there is one, needs a static-friendly option such as a `mailto:` link or a third-party form endpoint.
- **Content:** written directly into the pages and components. No content collections or CMS.
- **Sections:** skills, experience, education, projects, contact.
- **Actions:** open the resume PDF in a new tab, links to GitHub, LinkedIn, LeetCode, Instagram and Discord, email or contact.
- **Not decided yet:**
  - the custom domain or base path for GitHub Pages
  - whether a contact form is used at all (or just email), and which form service
  - whether the internship was remote or onsite (the resume says both)

## Brand Commitments

- **Name:** Suprava Dutta.
- **Binding visual requirement 1:** the design must match the supplied portrait (`src/assets/suprava-portrait.png`). Its colour and mood are the source for the visual identity.
- **Binding visual requirement 2:** the interface must use the Apple Liquid Glass style, meaning glassmorphic, translucent surfaces.

## Evidence on Hand

- `src/assets/suprava-portrait.png`: portrait, 1388×1548 PNG with the background removed (transparent).
- `public/suprava-dutta-resume.pdf`: the current resume. **It's the source for all site content.** The download button points to this file. The facts and link targets below were taken from it.

### Identity and profiles

- **Email:** supravadutta.official23+portfolio@gmail.com (site address since 2026-10-22, set by Suprava; Gmail plus-alias, differs from the resume address)
- **GitHub:** https://github.com/sDaCoder
- **LinkedIn:** https://www.linkedin.com/in/suprava-dutta-sda-e23
- **Instagram:** https://www.instagram.com/sda.e23/ (@sda.e23, public; added by Suprava 2026-10-22, not on the resume)
- **Discord:** @sda_e2023 (username sda_e2023; added by Suprava 2026-10-22, not on the resume; no profile URL without the numeric user ID, so the site copies the username)
- **LeetCode:** https://leetcode.com/u/sda_e23/ (350+ problems solved; updated by Suprava 2026-10-22, the resume PDF still says 300+)
- **Phone:** it's on the resume, but **keep it off the site** unless the user asks for it.

### Education

- **B.Tech, CSE:** IEM Kolkata, 2023–2027, currently in 6th semester, CGPA 8.93/10.
- **BS, Electronics Systems Engineering:** IIT Madras, 2023–2027 (up to Diploma level), CGPA 7.9/10.
- **School:** Nava Nalanda. Class XII 82.6% (2023), Class X 88.42% (2021).
- **Exams:** JEE Main 2023, 92 percentile (qualified for JEE Advanced 2023). WBJEE 2023, AIR 3776.

### Experience

- **AI Development Intern, Remote Programmer Private Limited** (https://remoteprogrammer.com/), June–Sept 2026.
  - Designed end to end a multi-agent conversational AI assistant for a US-based client: multi-agent orchestration and intent routing.
  - Built with LangChain, LangGraph, RAG, BM25, Redis and Jira.
  - Offer letter: https://drive.google.com/file/d/1i9zXse0AQ8ZyCzLN63xl8NGdoBtRpndp/view
  - Completion certificate: https://drive.google.com/file/d/1sGFCmk3e9eTHVFZ8ev960g6TlfD1Uuhf/view
- **Web Administrator, Ramanujan Society of Research, IIT Madras** (2024).
  - Redesigned and upgraded the society's website and handled its maintenance (React JS, Figma).
  - Live site: https://rasoriitm.vercel.app/
  - Certificate: https://drive.google.com/file/d/1KMc1hyiZEPKC6MI4m-3OfpUkt9tYo9ah/view

### Projects

- **CurioGenius AI** (https://github.com/sDaCoder/business-development-pod)
  - A "business development pod": a multi-agent system with four agents (business, designer, developer, testing).
  - Vector search keeps track of the user persona.
  - Uses AWS DynamoDB, with a FastAPI backend deployed on AWS EC2.
- **Recon AI** (repo https://github.com/sDaCoder/reconai, live at https://reconai-one.vercel.app/)
  - Reconciles merchant transactions, payment-provider settlements and bank statements to find discrepancies.
  - A QA agent works out the reason for each discrepancy.
  - Built with LangChain, FastAPI, Postgres and OpenAI.
- **Smart Home Server (ESP32)**
  - An IoT web server for controlling home appliances remotely. The ESP32 acts as the Wi-Fi access point and Node.js runs the backend.
  - Uses MQTT for two-way communication and JWT authentication for API access.
  - Repo: https://github.com/sDaCoder/esp32-server (set by Suprava 2026-10-22; the resume's nextjs-react-todo link was wrong)

### Skills

- **Languages:** Java, Python, C, C++, JavaScript, SQL, MongoDB, Linux.
- **Hardware:** ESP32, Arduino, Embedded C.
- **Libraries:** FastAPI, LangChain, boto3, React, Next.js, Express.
- **Tools:** AWS, Postman, Jira, Claude Code.

### Courses and certifications

- Full Stack Web Development, Udemy: https://www.udemy.com/certificate/UC-5150e81f-9f67-4494-8d9d-606d1579a663/
- Spring Boot, Coursera: https://www.coursera.org/account/accomplishments/verify/YL0YG7POCOB9
- Model Context Protocol, Anthropic: https://verify.skilljar.com/c/8ffyqwasvccp
- Introduction to subagents, Anthropic: https://verify.skilljar.com/c/v7shar7cz2iv
- AI Builders Lab, Google Cloud (via Hack2skill): https://certificate.hack2skill.com/user/aibuilderslab/2024H2S10AIBL-P003088
- Galactic Problem Solver, NASA Space Apps Challenge 2024 (Noida): https://drive.google.com/file/d/1Rd5Rjo7jA3h6FB2ZVefDHZGVSQsZqPvy/view

### Not supplied

- writing, papers or talks
- testimonials
- metrics or impact numbers
- project screenshots

Don't invent any of these. Present the facts above as written, and don't add metrics, employers or claims beyond them.

## Product Principles

1. **Resume in seconds:** role, core stack and the resume download are visible without scrolling.
2. **Real work first:** projects with real links carry the most weight, and there's no filler content.
3. **Personal, not template:** the identity comes from Suprava's own photo, so the site couldn't belong to anyone else.
4. **Fast and static:** it has to work well as a static GitHub Pages site on mobile connections, and any glass effects must not slow it down or hurt readability.

## Accessibility & Inclusion

- Text on translucent glass surfaces must still meet WCAG AA contrast.
- Respect `prefers-reduced-motion` and `prefers-reduced-transparency`.
