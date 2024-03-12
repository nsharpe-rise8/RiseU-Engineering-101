# Chapter 1: Git and Version Control

Welcome to the first chapter of your onboarding course! This chapter will introduce you to the fundamentals of Git and Version Control. By the end of this chapter, you'll understand how to manage your code securely and efficiently, using Git for workflow management, and both SSH and GPG keys for security.

## Objectives

After completing this chapter, you will be able to:

- Secure your repository connections with SSH keys for safe access.
- Enhance commit security and trustworthiness using GPG keys for signing.
- Optimize your Git setup with repository templates and `.gitignore` configurations.
- Personalize your commit history with a configured Git profile.
- Automate your workflow with Git hooks via Husky.

## Getting Started

### Prerequisites

Make sure you have the following set up:

- Git CLI: [Installation Guide](https://formulae.brew.sh/formula/git#default)
- GPG for commit signing: [Installation Guide](https://formulae.brew.sh/formula/gnupg)
- A GitHub account with a verified email: [Verification Guide](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address)

### Step-by-Step Instructions

#### 1. Secure Repository Access with SSH Keys

SSH keys enable a secure method for connecting to your Git repositories, ensuring that your data remains safe from unauthorized access. To generate and add an SSH key to your GitHub account, follow the [GitHub SSH Key Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

#### 2. Enhance Commit Security with GPG Keys

While SSH keys protect your repository access, GPG keys secure the content of your contributions. Signing your commits with GPG verifies your identity and ensures that your changes are tamper-proof.

- **Generate a GPG key:** Follow GitHub's instructions on [creating a new GPG key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).
- **Add your GPG key to GitHub:** Follow GitHub's instructions on [adding a GPG key to your GitHub Account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)

#### 3. Configuring Your Git Profile

Personalize your Git profile by setting your name and email address. This information will appear in your commit history, making your work identifiable and traceable:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### 4. Setting Up `.gitignore`

Create a `.gitignore` file at the root of your project to keep your repository clean by excluding files like `node_modules/` and `.env` from being tracked.

#### 5. Enhancing Workflow with Git Hooks

In the upcoming sections, we'll explore using Git hooks to streamline our development workflow. Git hooks automate crucial tasks like testing, formatting, and building directly within our Git workflow. This automation is especially useful in team settings, ensuring consistency across various IDEs and providing immediate feedback on potential issues, which helps prevent problematic code from being pushed.

While Git hooks are invaluable for maintaining code quality, they are not a substitute for a full CI/CD pipeline, which offers comprehensive testing and deployment processes. However, it's essential to be mindful of the potential downsides of Git hooks, such as slowing down commits or causing frustration if they're too restrictive.

To avoid these pitfalls, we recommend:

- **Selective Hook Implementation**: Choose hooks that balance value and workflow disruption. Lightweight checks are suitable for pre-commit hooks, while more extensive tests can be reserved for pre-push hooks.
- **Team Awareness**: Make sure the team understands the purpose and operation of the hooks to prevent confusion.
- **Escape Mechanisms**: Allow for ways to bypass hooks when necessary by running `--no-verify`

Heres what you'll need to do to get started with git hooks in a node application

- Install Husky:
  ```bash
  npm install husky --save-dev
  ```
- Enable Husky:
  ```bash
  npx husky install
  ```
- Add a pre-push hook:
  ```bash
  npx husky add .husky/pre-push "npm test"
  ```

### Conclusion

Congratulations on completing Chapter 1! You've taken significant steps to secure your development workflow with Git. By incorporating both SSH and GPG keys, you ensure both secure access to your repositories and the integrity of your contributions.

To finalize your setup, commit and push your initial configurations:

```bash
git add .
git commit -m "Initial project setup"
git push origin main
```

With these foundations in place, you're ready to tackle more advanced Git topics in upcoming chapters. Continue practicing with these tools to become more comfortable and efficient in your Git workflow. Happy coding, and see you in the next chapter!
