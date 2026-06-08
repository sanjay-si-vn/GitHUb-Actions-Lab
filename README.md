# GitHub Actions Lab

A beginner-friendly CI (Continuous Integration) project built while learning Git, GitHub, and GitHub Actions.

Created by **Sanjay**.

---

# Project Overview

This project demonstrates how GitHub Actions can automatically run tests whenever code is pushed to a repository.

The application contains:

- A simple Node.js function
- An automated test
- A GitHub Actions workflow

The goal is to understand the complete CI workflow from code commit to automated validation.

---

# Project Structure
```
github-actions-lab/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── app.js
├── test.js
├── package.json
└── README.md
```

---

# Application
```
## app.js

Contains a simple function:

function add(a, b) {
    return a + b;
}

module.exports = add;

---
```
# Automated Testing
```
## test.js

Validates the application logic automatically.

const add = require("./app");

if (add(2, 3) === 5) {
    console.log("Test Passed");
} else {
    throw new Error("Test Failed");
}
```
---

# Local Testing
```

Run the test locally:

npm test

Expected output:

Test Passed
```
---

# GitHub Actions Workflow
```
Location:

.github/workflows/ci.yml

Workflow:

name: CI Pipeline

on:
  push:
  
jobs:
  test:
  
    runs-on: ubuntu-latest
    
   steps:

      - name: Checkout Code
        uses: actions/checkout@v4
      - name: Setup NodeJS
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Run Tests
        run: npm test
```
# CI Workflow Architecture
```
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    ▼
GitHub Actions Triggered
    │
    ▼
Ubuntu Runner Created
    │
    ▼
Checkout Repository
    │
    ▼
Install Node.js
    │
    ▼
Run npm test
    │
    ▼
PASS / FAIL
```
---

# Learning Objectives

This project helped me learn:

- Git repository initialization
- Git commits
- GitHub repositories
- GitHub remotes
- GitHub push workflow
- Node.js project structure
- package.json
- Automated testing
- GitHub Actions
- Workflow files
- Jobs
- Steps
- Actions
- Triggers
- CI pipeline fundamentals

---

# Commands Used

## Initialize Node Project

npm init -y

## Run Tests

npm test

## Check Status

git status

## Add Files

git add .

## Commit Changes


git commit -m "Initial CI lab project"

## Push Code

git push

---

# Future Enhancements

- Add multiple test cases
- Add npm dependencies
- Add artifacts
- Add environment variables
- Add GitHub Secrets
- Build Docker image
- Push image to Docker Hub
- Deploy to AWS EC2
- Create a complete CI/CD pipeline

---

# Author

**Sanjay**

Learning DevOps, Cloud, Linux, Git, Docker, Kubernetes, Terraform, AWS, and CI/CD through hands-on projects.

## Screenshots

<img width="1906" height="906" alt="Screenshot 2026-06-08 115133" src="https://github.com/user-attachments/assets/577d8552-7f00-4ebb-ba38-5e7dbf353a59" />

