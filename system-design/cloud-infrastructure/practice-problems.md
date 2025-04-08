
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Foundational](#foundational)
  - [Subjective Question 1](#subjective-question-1)
  - [Subjective Question 2](#subjective-question-2)
  - [Subjective Question 3](#subjective-question-3)
  - [Subjective Question 4](#subjective-question-4)
- [Practice Problems](#practice-problems)
  - [Add Test and Linter Infrastructure to a Codebase You're Familiar With](#add-test-and-linter-infrastructure-to-a-codebase-youre-familiar-with)
    - [1. Executive Summary of Planned Improvements](#1-executive-summary-of-planned-improvements)
    - [2. Decision Document for Framework Selection](#2-decision-document-for-framework-selection)
    - [3. Executive Summary After Implementation](#3-executive-summary-after-implementation)
    - [4. Cloud Build Configuration Example](#4-cloud-build-configuration-example)

<!-- /code_chunk_output -->

# Foundational 

--

## Subjective Question 1

1. Explain the difference between a virtual machine and a container. How are they run, and how do they interact with the host system?

**Container** 
 - A **Container** is a lightweight, standalone executable package that includes everything needed to run an application (code, libraries, dependencies) but **shares the host OS kernel** instead of running its own.

**Virtual Machine** 
 - Is an emulation of a physical computer. It runs on a **hypervisor**, which allows multiple VMs to share the same physical hardware. Each VM has its own **operating system (OS), kernel, and resources (CPU, memory, storage, networking)**.

2. Name and justify one potential advantage of using a virtual machine over a container.
    
- There's more security in a virtual machine because each on runs it's own isolated operating system. 

3. Name and justify one potential advantage of using a container over a virtual machine.
    
- It's lightweight because it uses the host operating system so there's less overhead. It's also very quick to start up compared to a VM. 

4. Imagine we want to create and deploy a scalable cloud application with high availability, would you choose to use containers or VMs? Justify.

- I'd chose containers because they are easier to scale, fast start ups, take up significantly less space, and lightweight because it uses the host operation system so there's less overhead.

---

## Subjective Question 2

You’re trying to pitch a new initiative at work to migrate an existing application off of on-premise servers and onto a cloud platform.

1. Name (2) benefits of moving to a cloud platform. Explain.
    
- Increase productivity, by moving to a cloud platform, the underlying infrastructure maintenance is managed by the cloud provider. Cloud computing provides **virtual machines (VMs) and containers** to run applications. Instead of buying physical servers, you can rent computing power on-demand.  
- In addition, cloud platforms allow you to scale resources up or down based on demand. 
- Cloud servers usually have multiple locations and are less fragile to outages in a particular locale

2. Name (2) costs/downsides of migrating to a cloud platform. Explain.
   
- Ongoing costs using a pay-as-you-go model, which means of the systems are not optimized, we could be paying extra. 
- Vender lock in and migration strategies. Migration can become complex, so once we move to a vender, we are locked in for the time being. 
- In the case of using interdependent cloud services, and outage in one service or by our provider also brings your application down. 

3. Describe an app that would be a good candidate for migrating to the cloud. Justify.

- An e-commerce application would be a good candidate because there are traffic spikes during sales event's such as black Friday and venders offer autoscaling features. It will be much simpler to scale horizontally to handle millions of users. 

---

## Subjective Question 3

One of the considerations to developing on the cloud is application latency

1. Describe (2) ways in which cloud applications can reduce application latency over.

- Multiple containers can be deployed on the same machine. 
- Integration with CDNs, and can deploy code on servers "closer to the edge" where users are. 
- Multi-region support, geographically distributed deployments,  users can ping servers closest to them. 
- Autoscaling, then a server hit's a predefined limit, resources can increase to handle the incoming load/traffic. 

2. Describe (2) ways in which deploying on the cloud can introduce additional latency to your system. For each reason, also include one possible way to help mitigate.

**Inter-Service Communication Across Regions**

- If components are **distributed across regions**, cross-origin calls can add milliseconds of latency per request.   
    - If we are using multiple venders, that's will be additional network latency by communicating between each environment. 
- Mitigation: Co-locate interdependent services in the same region. 

**Cold Startups**
- Adds latency as the instance spins up 

**Shared Resources**
- Can have "noisy neighbors" that will congest shared networks, increasing latency. 

- **Mitigation:** User premium-tier services with dedicated network bandwidth. 

---

## Subjective Question 4

1. Briefly describe what Infrastructure as Code (IaC) is.
- It's a service or tool that allows use to treat Infrastructure like application programming. This allows teams to check in code on demand, get reviews from multiple team members, and deploy "template" infrastructure. 
- Gives us version control, i.e. if we deploy new code and it breaks the system, we can quickly roll back to the previous known working code.   


2. Name at least one IaC tool, and briefly describe what it does.

- Terraform: Uses drivers to target multiple cloud providers; requires rewrite if deploying to new provider

3. Name at least (2) advantages to use Infrastructure as Code tools over doing so manually. Justify.
- Code reviews reducing bugs 
- Version Control to roll back changes if necessary. 
- Infrastructure becomes well documented. 
- Can propagate changes or new deployments across the system faster


4. Name at least (1) potential drawback to introducing Infrastructure as Code tools to your project. Justify.

-  Can require you to learn a new language and paradigms. Can become unwieldy for complex infrastructure. 
- Bugs in the underlying packages can spread to all of your machines. 
  
# Practice Problems 

## Add Test and Linter Infrastructure to a Codebase You're Familiar With

**Context**

DevOps are an important piece of everyday life as an engineer. We want to ensure our code is clean and healthy so that we can continue to add features in a way that doesn’t give us a headache later!

Imagine you have been asked by a startup to help improve their code stability. They are working with a language you’re familiar with, but they are struggling with an ever-growing codebase and are constantly running into build issues after they merge large changes. For the sake of this challenge, you’re asked to improve the developer experience of a project you’re already working on. 

**The Challenge**
- Select a codebase you’re familiar with
- Select a framework for unit tests
- Select a linter
- Configure your project to run tests and lint easily
    - For example, in NPM projects, add script entries in package.json
- Verify that the test and lint scripts complete successfully (that is, they exit with code 0)
- Build or configure a cloud build environment to run the test and lint scripts on the code
- For simplicity, you can invoke this function manually
- For an added challenge, configure the cloud build to run on PRs

**Deliverables**

Write an executive summary of the improvements you will make. Explain in non-technical terms which tools you’ll be using and how you expect them to improve the quality of code written. Give examples of problems that may be caught after your changes are made.

Provide a decision document that explains why you chose the frameworks you did. Discuss the tradeoffs between the most popular options and analyze which fits your project best.

Write an executive summary of the improvements after you have implemented them. Note the problems you found in the process and explain how you fixed them (e.g. in Typescript, “No Implicit Any”: we added explicit types to prevent invalid input).
Create a cloud build configuration; add comments explaining what each line does.

**Solution** 

Below is a comprehensive response that addresses each deliverable for adding test and linter infrastructure to an existing codebase. In this example, we’re assuming a Node.js project as our familiar codebase.

---

### 1. Executive Summary of Planned Improvements

**Overview:**  
We are implementing automated testing and code linting to ensure that the code remains clean, consistent, and error-free. This will help our development team catch bugs early, enforce coding standards, and streamline code reviews.

**Tools to Be Used:**

- **Unit Testing Framework with 100% Code Coverage:**  
  **Jest** will be used because it is simple to set up, has built-in assertion libraries, and provides fast feedback through its watch mode.  
- **Linter:**  
  **ESLint** is chosen to analyze code for potential errors, enforce coding standards, and maintain consistency across the codebase.

**Expected Improvements:**

- **Early Detection of Errors:**  
  Automated tests will catch logic bugs, broken functionality, or unexpected behavior before merging changes.
  
- **Consistency in Coding Style:**  
  The linter will automatically check the code against our chosen style guide. For example, it will flag unused variables, missing semicolons, or poorly formatted code.

- **Reduced Technical Debt:**  
  By catching errors early, the team will spend less time debugging after changes, leading to a more stable codebase over time.

**Examples of Issues That May Be Caught:**

- **Unit Tests:**  
  Incorrect output due to logical errors in functions (e.g., miscalculations or wrong return values).  
- **ESLint:**  
  Potential runtime errors like undefined variables or misused APIs, and formatting issues that might lead to harder-to-read code.

---

### 2. Decision Document for Framework Selection

**Unit Testing Framework Options:**

- **Jest:**  
  - *Pros:* Easy setup, built-in assertion library, snapshot testing, fast feedback, and a rich plugin ecosystem.  
  - *Cons:* May be overkill for very small projects, but the benefits far outweigh the minor overhead.
  
- **Mocha:**  
  - *Pros:* Highly configurable, works well with various assertion libraries like Chai.  
  - *Cons:* Requires additional setup for assertions and test doubles, leading to more initial configuration.

**Linter Options:**

- **ESLint:**  
  - *Pros:* Widely adopted in the JavaScript community, highly customizable, and integrates with most IDEs.  
  - *Cons:* Requires initial configuration which might be challenging for beginners, but modern tooling has simplified this process.
  
- **JSHint:**  
  - *Pros:* Simpler configuration and easier to get started.  
  - *Cons:* Less flexible and not as actively maintained as ESLint.

**Rationale for Choices:**

- **Jest** was selected due to its simplicity, speed, and all-in-one solution for testing which suits the dynamic and fast-paced environment of a startup.
- **ESLint** was chosen for its robustness and extensive community support. Its flexibility ensures that as our project grows, our linting rules can evolve to enforce best practices without hindering development.

**Tradeoffs:**  
While Mocha offers high configurability, the additional configuration steps and external libraries make it less attractive compared to Jest. Similarly, ESLint’s slight initial complexity is outweighed by its long-term benefits in maintaining code quality compared to lighter alternatives like JSHint.

---

### 3. Executive Summary After Implementation

**Overview:**  
After integrating Jest and ESLint into the project, the overall code quality and stability have significantly improved. The automated tests and linting processes now run as part of our build pipeline, ensuring every code change is validated before merging.

**Issues Encountered and Resolutions:**

- **Test Failures:**  
  Some tests initially failed due to unexpected edge cases in the code logic. We refined the test cases and fixed the underlying logic, ensuring that all tests pass reliably.
  
- **ESLint Configuration Warnings:**  
  Early on, ESLint flagged several common issues such as unused variables and inconsistent formatting. We addressed these by refactoring the code and updating our ESLint configuration to better align with our coding standards.
  
- **Environment Mismatch:**  
  Minor discrepancies between local and cloud build environments were resolved by ensuring consistent Node.js versions across both setups.

**Benefits Realized:**

- **Improved Developer Confidence:**  
  Developers now receive immediate feedback on potential issues, reducing the time spent on debugging and improving the overall quality of new features.
  
- **Streamlined Code Reviews:**  
  Automated linting and testing reduce the burden on reviewers, allowing them to focus on functionality rather than style and trivial errors.

---

### 4. Cloud Build Configuration Example

Below is an example GitHub Actions configuration file (`.github/workflows/ci.yml`) for automating the tests and linting processes:

```yaml
# Name of the workflow
name: CI

# Trigger the workflow on push or pull request events to the main branch
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    # Run the job on the latest Ubuntu environment provided by GitHub Actions
    runs-on: ubuntu-latest
    
    steps:
      # Step 1: Checkout the repository code
      - name: Checkout Code
        uses: actions/checkout@v2

      # Step 2: Setup Node.js environment
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14' # Specify the Node.js version to ensure consistency

      # Step 3: Install project dependencies
      - name: Install Dependencies
        run: npm install

      # Step 4: Run unit tests using Jest
      - name: Run Tests
        run: npm test

      # Step 5: Run linting using ESLint
      - name: Run Linter
        run: npm run lint
```

**Explanation of the Cloud Build File:**

- **Trigger Configuration:**  
  The workflow is triggered on any push or pull request events to the `main` branch.
  
- **Job Environment:**  
  The job runs on an `ubuntu-latest` runner, ensuring a consistent and isolated environment.
  
- **Steps:**  
  1. **Checkout Code:** Fetches the latest code from the repository.
  2. **Setup Node.js:** Ensures that the correct version of Node.js is used, matching the development environment.
  3. **Install Dependencies:** Runs `npm install` to install all required packages.
  4. **Run Tests:** Executes the `npm test` command, running the Jest test suite.
  5. **Run Linter:** Executes the `npm run lint` command, running ESLint to enforce code quality.

---
