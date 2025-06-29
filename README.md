# Client Management Dashboard

![Project Status](https://img.shields.io/badge/Status-Under%20Development-blue)


A modern, responsive **Next.js** application designed to efficiently manage client data. This dashboard includes robust features such as pagination, real-time search, and advanced filtering capabilities. It's built with the latest React hooks for state management and styled using **Tailwind CSS** to deliver a clean, intuitive, and highly responsive user experience.

---

## 🌟 Features

* **Client Data Management:** Fetch and display client information from an API or mock source.
* **Real-time Search:** Instantly filter clients by name, email, or phone number.
* **Pagination:** Seamlessly navigate through large datasets with a dedicated pagination component.
* **Sorting (UI Placeholder):** UI elements for sorting clients by criteria like name or date (backend logic to be implemented).
* **Responsive Design:** Optimized for various screen sizes using Tailwind CSS.
* **Reusable Components:** Modular and extensible components for common UI elements (e.g., `Pagination`, `SearchBar`).
* **Clean Architecture:** Structured project following Next.js and React best practices for maintainability.
* **Client Actions:** Placeholder buttons for edit and delete functionalities, ready to be wired to backend logic.
* **Add Client Page:** Dedicated page (`/ajouter-client`) for adding new client records.
* **Client-Side Forms:** Utilizes `react-hook-form` for efficient and validated form management.

---

## 🛠 Technologies Used

* **Next.js 14+:** React framework for hybrid rendering (Server Components by default, Client Components for interactivity) and routing.
* **React:** Core UI library with functional components and hooks for state management.
* **Tailwind CSS:** A utility-first CSS framework for rapid and consistent styling.
* **React Hook Form:** For powerful and efficient form validation and state management.
* **Moment.js:** (Or a modern alternative like `date-fns` if preferred) For efficient date parsing, manipulation, and formatting.
* **React Icons:** For easily incorporating scalable vector icons.
* **TypeScript:** (Optional, but recommended for type safety) Enhances code quality and reduces runtime errors.

---

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/en/) (v18.x or higher recommended)
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/achrafelhadjaoui/CRM-Nextjs.git
    cd CRM-Nextjs
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    # OR
    yarn dev
    ```

### Usage

Open your browser and navigate to `http://localhost:3000/clients` to see the client list.

* Use the **search bar** to filter clients instantly by name, email, or phone.
* **Navigate pages** with the pagination component.
* Click **"Ajouter Client"** (Add Client) in the sidebar to access the client addition page.
* **Sort clients** using the dropdown (currently UI only; implement backend sorting logic as needed).
* **Edit and delete buttons** are placeholders; wire them to your backend logic for full functionality.

---

## ⚙️ Customization & Extension

This project is designed to be easily customizable and extensible:

* **Connect to a Backend API:** Replace the mock data fetching logic (e.g., in `app/clients/page.tsx` or `lib/clients.ts`) with actual API calls to your backend.
* **Implement Sorting Logic:** Enhance the sorting dropdown to integrate with your data fetching and sorting capabilities.
* **Full CRUD Operations:** Implement the complete edit and delete functionality, possibly using dedicated client detail pages or modals.
* **Pagination Settings:** Adjust the `clientsPerPage` constant to change the number of items displayed per page.
* **Form Validation:** Enhance the `AjouterClientForm` with more complex validation rules using `react-hook-form`.
* **UI/UX Enhancements:** Further refine the styling and user experience with Tailwind CSS.

---

## ✨ Code Quality & Best Practices

* **Component Reusability:** Components like `Pagination` and `SearchBar` are designed to be generic and reusable.
* **Local State Management:** Simple state management is handled locally using React hooks (`useState`, `useEffect`).
* **Clear Folder Structure:** Organized directories for pages, components, and utilities promote clarity and maintainability.
* **Tailwind CSS:** Utilized for consistent, responsive, and efficient styling.
* **Accessibility:** Basic accessibility considerations (e.g., button labels, focus outlines) are integrated.
* **Search & Pagination Reset:** Filtering or searching automatically resets the current page to 1 for a consistent user experience.
* **Client vs. Server Components:** Correctly utilizes Next.js App Router's client (`"use client";`) and server component rendering for optimal performance.

---

## 📄 License

This project is licensed under the Achraf Elhadjaoui License.

---

## ✉️ Contact

* **Created by:** Achraf Elhadjaoui
* **Email:** aelhadjaoui23@gmail.com
* **GitHub:** [https://github.com/achrafelhadjaoui](https://github.com/achrafelhadjaoui)
* **Portfolio:** [https://yourwebsite.com](https://yourwebsite.com)

---

## 🙏 Acknowledgments

* Inspired by Next.js and Tailwind CSS documentation and examples.
* Thanks to React Icons for easy icon integration.
* Thanks to React Hook Form for simplifying form management.