# AIONXDEV Portfolio Website

![AIONXDEV Portfolio Screenshot](public/portfolio-screenshot.png)
<!-- Add a screenshot of your portfolio to the public folder and reference it here.
     Alternatively, if hosted, you can use an absolute URL to the image on your live site. -->

This repository contains the source code for my personal portfolio website, showcasing my skills, projects, and services as a Full-Stack Developer, AI Integrator, and Biomedical Engineer.

**Live Demo:** [https://aionx.dev](https://aionx.dev)

---

## 🚀 Introduction

Hey, I’m **AionX**, but online I go by **AIONXDEV**. I build digital systems that actually solve problems, sitting at the intersection of **code**, **health**, and **automation**. This portfolio is built with React and Vite, designed to be clean, fast, responsive, and a reflection of the quality I bring to my projects.

This site details my professional journey, the technologies I work with, projects I've developed (both live and in-progress), services I offer, and my thoughts on technology through a blog.

---

## ✨ Key Features

*   **Responsive Design:** Looks great on all devices (desktops, tablets, and mobiles).
*   **Dark Mode:** User-toggleable dark/light theme for comfortable viewing.
*   **Detailed Project Showcase:** In-depth pages for each project with descriptions, tech stacks, and links.
*   **Service Listings:** Clear overview of the services I offer.
*   **Interactive Elements:** Typewriter effects, animated counters, and smooth transitions.
*   **Blog Section:** Articles and insights on AI, development, and HealthTech.
*   **Static Site Generation:** Built with Vite for optimal performance and easy deployment.
*   **SEO Optimized:** Structured for search engines with relevant meta tags.
*   **Contact Form & Direct Links:** Easy ways to get in touch via Formspree, email, and WhatsApp.
*   **WhatsApp Quick Contact:** Floating button for instant messaging.
*   **Project Filtering:** Ability to filter projects by category and technology.

---

## 🛠️ Tech Stack

*   **Frontend:**
    *   React (with Hooks)
    *   Vite (Build Tool)
    *   React Router DOM (Routing)
    *   Standard CSS (No CSS Modules in this setup, directly using `.css` files)
    *   SwiperJS (for Testimonials Slider)
    *   React Icons (for UI icons)
*   **Data Management:** Static JSON/JS files in `src/data/`
*   **Contact Form:** Formspree (Static form backend)
*   **Deployment:** (Vercel, GitHub Pages - specify where you plan to host)

---

## ⚙️ Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v16.x or higher recommended)
*   Yarn (v1.x or higher) or npm (v8.x or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aionxdev/ortfolio.git
    cd aionxdev-portfolio
    ```

2.  **Install dependencies:**
    Using Yarn:
    ```bash
    yarn install
    ```
    Or using npm:
    ```bash
    npm install
    ```

3.  **Set up Formspree (Optional - for contact form):**
    *   Go to [Formspree.io](https://formspree.io/) and create a new form.
    *   Copy your Formspree endpoint ID.
    *   Update the `FORMSPREE_ENDPOINT` in `src/utils/constants.js` with your endpoint URL (e.g., `https://formspree.io/f/YOUR_ID`).
    *   Alternatively, create a `.env` file in the project root and add your Formspree endpoint:
        ```env
        VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID
        ```
        And then update `src/utils/constants.js` to use `import.meta.env.VITE_FORMSPREE_ENDPOINT`.

---

## ධාවනය කිරීම (Running the Project)

To run the project locally in development mode:

Using Yarn:
```bash
yarn dev
```

Or using npm:
```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173/`. Open this URL in your browser to view the application. The app will automatically reload if you change any of the source files.

---

## 🏗️ Building for Production

To create a production build of the application:

Using Yarn:
```bash
yarn build
```

Or using npm:
```bash
npm run build
```

This command will generate a `dist` folder in your project root with the optimized static assets for your application. You can then deploy the contents of this `dist` folder to any static hosting service.

---

## 📁 Folder Structure (Overview)

```
aionxdev-portfolio/
├── public/             # Static assets (favicon, images, resume, manifest.json)
├── src/                # Main source code
│   ├── assets/         # Vite-processed assets (logos, icons, illustrations)
│   ├── components/     # Reusable React components (common, home, about, etc.)
│   ├── data/           # Static data files (projects, services, blog posts, etc.)
│   ├── hooks/          # Custom React Hooks
│   ├── pages/          # Top-level page components
│   ├── styles/         # CSS files (global, theme, page-specific, component-specific)
│   └── utils/          # Utility functions and constants
│   ├── App.jsx         # Root application component, router setup
│   └── main.jsx        # Entry point, renders App component
├── .gitignore
├── index.html          # Main HTML entry point
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Deployment

This site is a static build and can be easily deployed to services like:
*   Netlify
*   Vercel
*   GitHub Pages
*   AWS S3/CloudFront
*   Firebase Hosting

Simply connect your repository to one of these services, or upload the contents of the `dist` folder after running `yarn build` or `npm run build`.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE.md).

---

## 📬 Contact

AionX (AIONXDEV)

*   **Portfolio:** [https://aionx.dev](https://aionx.dev)
*   **Email:** [aionxdev@gmail.com](mailto:aionxdev@gmail.com)
*   **LinkedIn:** [https://linkedin.com/in/aionxdev](https://linkedin.com/in/aionxdev)
*   **GitHub:** [https://github.com/aionxdev](https://github.com/aionxdev)
*   **WhatsApp:** [+2348089009786](https://wa.me/2348089009786)

---

_This README was last updated on 17th May 2025._
