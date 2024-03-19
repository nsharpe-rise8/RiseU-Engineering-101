# Chapter 2: Continuous Delivery and Deployment

Intro

## Objectives

After completing this chapter, you will be able to:

- Setup SCA linting
- Create build steps and artifacts
- Create automated unit, integration, and e2e tests
- Use secret enviornment variables

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

   After gradually building your `eslint.yml` file, save your changes, commit the new file, and push the branch to your GitHub repository. When ready, feel free to merge your changes after the pipeline checks pass.

#### 2. Create Build Stage

In this section, you'll learn how to set up the build stage of your continuous integration/continuous deployment (CI/CD) pipeline using GitHub Actions. The build stage is critical for compiling your code, running tests, and creating artifacts that can be deployed or used by subsequent stages in your pipeline.

**Creating the Build Workflow:**

After setting up your linting stage, the next step is to create a workflow for the build stage. This involves compiling your code (if necessary), running unit tests, and packaging the build artifacts.

1. **Set Up a New Workflow File:**

   Just like with the linting stage, start by creating a new workflow file in the `.github/workflows` directory. You might name this file `build.yml`.

   ```bash
   touch .github/workflows/build.yml
   ```

2. **Apply Previous Lerning**

   Using what you learned in the previous **Linting Stage**, go ahead and create a new file, and setup the action to run on a push event. Ensure it runs on the correct image, and properly set up the node env with dependencies installed.

   **a. Build Your Project:**

   Add the command to build your project. In the case of our vite react application, we'll use `npm run build` as our command, found in `application/riser-chat-ui/package.json` as a script.

   **h. Upload Artifacts:**

   Because our build process produces a `dist` folder that needs to be used by subsequent stages or stored, include a step to upload these.

   ```yaml
   - name: Upload build artifact
     uses: actions/upload-artifact@v3
     with:
       name: build-artifact
       path: application/riser-chat-ui/dist/
   ```

3. **Commit and Push Your Workflow:**

   Save the `build.yml` file, commit your changes, and push the new workflow to your repository. Like the linting workflow, this workflow will trigger based on the conditions specified in the `on` section.

   ### Conclusion

   By following these steps, you have successfully set up the build stage in your CI/CD pipeline, ensuring your code is compiled, tested, and ready for deployment or further stages. This stage is crucial for catching errors early and improving the overall quality of your software delivery process.

#### 3. Create Test Stage

In this section, you'll learn how to set up the test stage of your continuous integration/continuous deployment (CI/CD) pipeline using GitHub Actions. The test stage is critical for ensuring the application functions they way the team expects it too.

**Creating the Test Workflow:**

Automated testing is a cornerstone of any CI/CD pipeline, ensuring that new features, bug fixes, and other code changes do not introduce errors or break existing functionality. By automating tests within your CI/CD environment, you can consistently verify the integrity of your code with every change, facilitating a faster and more reliable delivery process.

**Benifits**

- **Early Bug Detection**: Emphasize how automated tests can identify issues early in the development cycle, before they become costly to fix.
- **Confidence in Code Changes**: Discuss how automated testing provides developers and teams with confidence in their code changes, facilitating more frequent and reliable releases.
- **Continuous Feedback Loop**: Explore how automated testing contributes to a continuous feedback loop, allowing teams to respond quickly to issues and adapt to changes.

1. **Apply Previous Lerning**

   Using what you learned in the previous **Linting and Build Stages**, go ahead and create a new file, and setup the action to run on a push event. Ensure it runs on the correct image, and properly set up the node env with dependencies installed.

2. **Commit and Push Your Workflow:**

   Save the `unit-test.yml` file, commit your changes, and push the new workflow to your repository. Like the linting workflow, this workflow will trigger based on the conditions specified in the `on` section.

   ### Conclusion

   By following these steps, you have successfully set up the build stage in your CI/CD pipeline, ensuring your code is compiled, tested, and ready for deployment or further stages. This stage is crucial for catching errors early and improving the overall quality of your software delivery process.

Outro

### Conclusion

Congratulations on completing Chapter 2!

Outro
