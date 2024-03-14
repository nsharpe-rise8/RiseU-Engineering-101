# Chapter 2: Continuous Delivery and Deployment

Intro

## Objectives

After completing this chapter, you will be able to:

- Setup SCA linting
- Create Build steps and artifacts
-

## Getting Started

### Prerequisites

Make sure you have the following set up:

-

### Step-by-Step Instructions

#### 1. Create Linting stage

Setting up a continuous linting process using GitHub Actions is a crucial step for maintaining high-quality code. This section aims to guide you through creating a GitHub Action for ESLint from scratch, providing a more educational approach to understand each part of the process.

1. **Initialize a New Branch for the Linting Setup:**

   Open your project and switch to a new branch specifically for adding the GitHub Action.

   ```bash
   git checkout -b setup-eslint-action
   ```

2. **Create the Workflow Directory and File:**

   - Ensure the existence of the `.github/workflows` directory in your project. If it's missing, create it with:

     ```bash
     mkdir -p .github/workflows
     ```

   - Inside the `workflows` directory, create a new file named `eslint.yml`. This file will define your linting workflow.

3. **Building Your Workflow File Step by Step:**

   Now, let's build the GitHub Action workflow. Open the `eslint.yml` file to start adding content to it.

   **a. Name Your Workflow:**

   The first line of the file should name your workflow. It's crucial for identifying the workflow in the GitHub Actions UI.

   ```yaml
   name: ESLint Check
   ```

   **b. Define the Trigger Event:**

   Decide when your workflow should run. For a linting workflow, running on every `push` to the repository makes sense.

   ```yaml
   on: [push]
   ```

   This snippet tells GitHub Actions to execute this workflow anytime someone pushes code to the repository.

   **c. Set Up the Job:**

   Jobs are a series of steps that execute on the same runner. Since our focus is on linting, we'll define a single job named `lint`.

   ```yaml
   jobs:
     lint:
       runs-on: ubuntu-latest
   ```

   This configuration specifies that the `lint` job runs on the latest Ubuntu virtual environment provided by GitHub Actions.

   **d. Checkout the Repository:**

   To perform actions on your code, such as linting, the workflow needs access to it. The `actions/checkout` action checks out your repository.

   ```yaml
   steps:
     - uses: actions/checkout@v3
   ```

   **e. Setup Node.js Environment:**

   Since ESLint runs in a Node.js environment, you must set up Node.js in the workflow. Use the `actions/setup-node` action for this purpose.

   ```yaml
   - name: Use Node.js
     uses: actions/setup-node@v3
     with:
       node-version: "21" # Specify the Node.js version you are using
   ```

   **f. Install Dependencies:**

   Before running ESLint, your project's dependencies must be installed.

   ```yaml
   - name: Install dependencies
     run: npm ci
     working-directory: application/riser-chat-ui
   ```

   Adjust the `working-directory` to the directory of your Node.js application if it's not in the repository root.

   **g. Run ESLint:**

   Finally, add the step to run ESLint on your codebase.

   ```yaml
   - name: Run ESLint
     run: npm run lint
     working-directory: application/riser-chat-ui
   ```

4. **Final Result:**

   As a result of the above steps, you should have a github action file that looks like this:

   ```yaml
   name: ESLint Check
   on: [push]
   jobs:
     lint:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v3
       - name: Use Node.js
       uses: actions/setup-node@v3
       with:
           node-version: "21"
       - name: Install dependencies
       run: npm ci
       working-directory: application/riser-chat-ui
       - name: Run ESLint
       run: npm run lint
       working-directory: application/riser-chat-ui
   ```

5. **Save, Commit, and Push Your Workflow:**

   After gradually building your `eslint.yml` file, save your changes, commit the new file, and push the branch to your GitHub repository.

   ```bash
   git add .github/workflows/eslint.yml
   git commit -m "Setup ESLint GitHub Action"
   git push origin setup-eslint-action
   ```

#### 2. Create Build Stage

### Conclusion

Congratulations on completing Chapter 2!
Wrap up instructions

Outro
