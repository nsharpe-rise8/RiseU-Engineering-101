# Chapter 1: Git and Version Control

Welcome to the first chapter of your onboarding course! This chapter is designed to introduce you to the fundamentals of Git and Version Control. By the end of this chapter, you will have hands-on experience with Git workflows, hosting services, hooks, profiles, and strategies for branching and merging.

## Objectives

By completing this chapter, you will:

- Manage SSH keys for secure connections to repositories
- Setup and Require verified commits
- Configure repository templates and `.gitignore` files
- Configure your Git profile for commit history
- Set up Git hooks using Husky

## Getting Started

### 1. Manage SSH Keys

SSH keys are a secure way to connect to your Git repositories. Follow the instructions provided by your Git hosting service to generate and add an SSH key to your account:

- [GitHub SSH Key Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

### 1. Setup and Require Verified Commits

Go to your forked Repository. Go to `settings`, then click the `Rules` -> `Rulesets`. Click the `New ruleset` button and select `New branch ruleset`.

Set the name of the rule as `Verified Commits`

Under Targets, click `Add target` and select `Include all branches`

Lastly, under `Rules` ensure only `Require signed commits` is selected.

Click `Create` and now you're done and should have the new rule which requires Verified Commits ✅

### Generate GPG keys

... todo

### 2. Configure `.gitignore`

Create a .gitignore file in the root of your project to specify untracked files that Git should ignore. Add node_modules and any environment-specific files to this list:

```bash
node_modules/
.env
```

### 2. Configure Your Git Profile

Set your Git profile name and email address. These will appear in your commits:

```bash
git config user.name "Your Name"
git config user.email "youremail@example.com"
```

**Further Reading:** [GitHub Docs - About Git Usernames](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#about-git-usernames)

### 4. Set Up Git Hooks with Husky

Git hooks are scripts that run automatically every time a particular event occurs in a Git repository. To set up pre-commit and pre-push hooks with Husky, follow these steps:

- Install Husky by running

```bash
npm install husky --save-dev
```

- Enable Git hooks by running

```bash
npx husky install
```

- To add a pre-push hook that ensure code passes tests run:

```bash
npx husky add .husky/pre-push "npm test"
```

- Edit the files in the `.husky` directory to run ay commands you wish on various git hooks

### Conclusion

Congratulations! You have successfully set up your project with Git, including the necessary configurations and security measures. Commit your changes and push them to your forked repository.

```bash
git add .
git commit -m "Initial project setup"
git push origin main
```

Once you've completed these steps, you're ready to move on to the next chapter. Happy coding!
