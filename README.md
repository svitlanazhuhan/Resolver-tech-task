# Resolver-tech-task

This repository contains automated tests using [Playwright](https://playwright.dev/) for testing a sample web application.

## 📌 Prerequisites

Ensure you have the following installed on your system:

- [Node.js (LTS version)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [http-server](https://www.npmjs.com/package/http-server) for serving the test page

To install `http-server`, run:
```sh
npm install -g http-server
```

## 🚀 Setup and Running Tests

### 1️. Download the Project
Clone this repository and navigate into the project folder:

```sh
git clone https://github.com/yourusername/Resolver-tech-task.git
cd Resolver-tech-task
```
### 2. Install Dependencies
Run the following command to install all required dependencies:

```sh
npm install
```

### 3. Run Tests
The test configuration automatically starts the local test server before execution, so no need to start it manually.

```sh
npx playwright test
```
### 4. View Test Report
After running the tests, generate and open the HTML test report:

```sh
npx playwright show-report
```
