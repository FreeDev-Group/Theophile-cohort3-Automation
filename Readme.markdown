# Student Survey App - Automated E2E Tests (Playwright)

This repository contains the automated end-to-end (E2E) testing suite for the "Student Survey" application. We use **Playwright** to automate our test cases and ensure the application remains stable across every development cycle.

---

##  Getting Started

To run the tests on your local machine, follow these steps:

### 1. Prerequisites
Ensure you have the following installed:
* **[Node.js](https://nodejs.org/)** (Version 18 or higher recommended). Node.js is the runtime environment that allows our test scripts to execute.

### 2. Installation
Once you have cloned the project, open your terminal in the project folder and run:


### Installs project dependencies (downloads Playwright and associated tools)
npm install

### Installs the required isolated browsers (Chromium, Firefox, WebKit)
### and the system dependencies needed to run them.
npx playwright install --with-deps

### Why these commands?

* **`npm install`**: Reads your `package.json` file to download everything the project needs into a local `node_modules` folder.
* **`npx playwright install`**: Downloads browser instances dedicated specifically to testing. This ensures that tests behave exactly the same way on every team member's computer, regardless of the browser you use daily.

##  Project Structure

* **`tests/`** : Main folder containing all test scenarios.
    * `tests/wise : Dedicated folder for tests developed by Wise
    * `tests/kabidu: Dedicated folder for tests developed by Kabidu
* **`playwright.config.js`** : Global configuration file (application URL, browser settings, etc.).
* **`node_modules/`** : Automatically generated folder containing project libraries (never modify this manually).

---

## 👥 Contributors

* **Mentor:** Théophile
* **Mentees:** Wise, Kabidu
* **Built for the FreeDev Group - A-Team.**
