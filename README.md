# show-money
React application to show balance sheet reports in tabular manner

This project is designed using React and TypeScript. It provides a basic structure for a financial dashboard, including navigation, API integration, and state management using Redux.
The project uses **Material-UI** for the user interface and error handling, and retry mechanisms for API calls.

---

## Features

- **React with TypeScript** for building a type-safe, maintainable application.
- **Material-UI** as the design library for a consistent UI experience.
- **Redux Toolkit** for state management.
- **Axios-based Utility** for API calls with retry logic.
- **Environment Configuration** for managing external endpoints, credentials, and environment settings.
- **Custom Table Component** to display balance sheet data dynamically.

---

## Project Structure

```plaintext
src/
├── components/            # Reusable UI components (home, navbar, balancesheet, table)
├── config/                # env config
├── constant/              # common constants
├── error/                 # custom error
├── redux/                 # store and redux slice for balance sheet
├── types/                 # basic types
├── util/                  # balance sheet utility and http client utility
├── App.tsx                # Main application component
├── index.tsx              # React DOM entry point
└── .env.{env}             # Environment variables
```

# Getting Started

## Prerequisites
Have Account manager working on local
https://github.com/karan-saj/account-manager.git

### Make sure you have the following installed:
Node.js (v16+)
npm or yarn

### Clone the repository:
git clone https://github.com/karan-saj/show-money.git
cd show-money
npm install

### Running the Application
npm run start:local

The app will be available at http://localhost:8090.

## Test
npm test

# Usage

Navigation
Navigate to the Home Page.
Click the "Go to Balance Sheet" button to access the balance sheet page.
Balance Sheet Page
Fetches balance sheet data from the API endpoint: http://localhost:8080/balanceSheet/report.
Displays the data in a Material-UI table.
Utilizes a custom utility function with a retry mechanism to handle API calls.

## Dependencies
React: Frontend library.
TypeScript: Adds static typing to JavaScript.
Material-UI: Provides pre-designed UI components.
Redux Toolkit: Simplifies state management.
Axios: Handles HTTP requests.
React Router: Enables navigation between pages.

# Future Enhancements
* Add extensive unit test and integration test
* add logging
* support authentication
* optimize build and package.json
* support user management
* caching for reports
* pagination for table/ lazy loading
* offline support, failure cases