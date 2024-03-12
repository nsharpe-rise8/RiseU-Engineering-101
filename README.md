# RiseU Engineering 101

## Course Description

Welcome to RiseU Engineering 101! This course is designed to introduce you to the fundamentals of software engineering, covering a wide range of critical topics and best practices in the industry. By the end of this course, you will have hands-on experience with the tools and technologies that power modern software development and deployment.

## Topics Covered

- **Government Related Topics**
- **Agile Team Collaboration**
- **Git Version Control**
- **Continuous Delivery and Deployment**
- **Testing and Quality Assurance**
- **Coding Patterns and Architecture**
- **Containerization**
- **Databases**
- **API Design and Networking**
- **Kubernetes (K8s)**

## Educational Project: LLM Personal Assistant

Throughout this course, you will work on developing an LLM Personal Assistant. This project will serve as a practical application of the concepts and technologies you learn.

## Getting Started

### 1. Fork the Repository

Start by forking this repository which contains some basic code and instructions for each chapter of the course.

- Click on the "Fork" button at the top right corner.

### 2. Clone Your Forked Repository

Once you have forked the repository, clone it to your local machine using the following command:

```bash
git clone <YOUR_FORKED_REPOSITORY_URL>
```

### 3. Project Navigation

Navigate to the `curriculum` folder, where you will find markdown lesson instructions and content for each topic.

The curriculum is structured by sections, each with its own markdown file (e.g., `Chapter-1-Git.md`, `Chapter-2-Agile-Collaboration.md`, etc.). Each section builds upon the previous one.

### Workflow & Assignments

- Start by creating a branch for the current section.
- Initialize your project with Git, including setting up git hooks, repository templates, `.gitignore` files, SSH keys, and Git profile configuration.
- Implement security controls for your forked repository and document your branching and naming conventions.
- Your starting point includes an initialized Vite client app and a NestJS backend app. Your tasks will involve containerizing the application, creating Docker and Docker Compose files.
- Begin Continuous Integration/Continuous Deployment (CI/CD) work, focusing on scanning, building, and testing. This may require setting up environments in AWS, GCP, Azure, or Minikube locally.
- Refactor the frontend of the application, introducing concepts of the 12-factor app and adjusting the starter app to adhere to these principles.
- Address code structure by creating data models, services, classes, and view models that follow SOLID principles. Consolidate and remove duplicate code as necessary.
- Pause to discuss different architectures, including Monolith, Microservice, Event-Driven Architectures, and API Gateways.
- Choose and implement a database system, evaluating SQL and document-based options.
- Develop APIs for communication between the client and backend service, along with any necessary external APIs.
- Conclude with the deployment phase of CI/CD, potentially utilizing Minikube for a hands-on experience or a simple cloud-based solution for a more theoretical approach, skipping real CI/CD deployment automation.
