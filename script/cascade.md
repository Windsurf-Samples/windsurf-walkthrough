# Windsurf Cascade Demo
Windsurf Cascade is a Collaborative, Agentic AI-assistant and is the natural evolution of a Chat Assistant. Cascade has access to research your code base, invoke tools to edit your code and run terminal commands, and understand your recent actions (your current trajectory) to derive your next intent.

**Note** Cascade is highly flexible as an Agentic System. This demo will walk through some of Cascade's core capabilities, but will be nonexhaustive

## Setup
1. Ensure you are at the git HEAD with `git reset HEAD --hard`

## Working with Code
Cascade is a great assistant for communicating with an AI Assistant about your code base 
### Explaining Code (via CodeLens)
Open `contact-form-app/backend/app.py` and place your cursor at the end of the line 
```python
def submit_contact():
```
Click the `Explain` option at the top of the breadcrumbs in the editor

### Explain Problems (via Intellisense)
Open `contact-form-app/frontend/tsconfig.json` and edit the line to the below:
```json
    "target": "es15",
```

Because es15 is not a valid target, Intellisense can provide a popup for Cascade to explain and fix the problem. The shortcut is `Command + Shift + .`


### Selecting Lines of Code from Editor
- Open `contact-form-app/backend/app.py` and highlight the below code snippets
```python
    if not data.get('message'):
        return jsonify({'status': 'error', 'message': 'Message is required'}), 400
    if not data.get('email'):
        return jsonify({'status': 'error', 'message': 'Email is required'}), 400
```
- Click the `Chat` option from the popup, or use the keyboard shortcut `Command + L`. Note how the specific lines of code are referenced in the chat window
- Add a user prompt to the end of this mentioned context such as `Explain and create inline comments`
- Review the chat reponse and edited code suggestions

### Reasoning over Code Bases
- Close all files and ensure you are starting from the git branch's HEAD `git reset HEAD --hard`
- Open `contact-form-app/backend/app.py`
- Ask Cascade: `Analyze this file. I want my backend form to accept a phone field. First determine where in my code base I am dependent on this code, then make a plan for updating all the relevant code files to begin accepting a new phone field.
- Note how Cascade uses multiple tool invocations to reason and then make edits across mutliple files

## Flow-awareness and Context-awarness
### Continue the flow
- Close all files and ensure you are starting from the git branch's HEAD `git reset HEAD --hard`. Ensure you are in a new Cascade Chat window with no conversation history
- Open `contact-form-app/backend/app.py`
- Add a phone field to the below:
```
    contact = {
        'name': data.get('name'),
        'email': data.get('email'),
        'message': data.get('message'),
        'phone': data.get('phone')
    }
```
- Type in Cascade: `Continue with the next step`

### Context from recent terminal commands
- open `contact-form-app/frontend/src/components/ContactForm.tsx`
- add the following import statement:
`import mui from '@material-ui'`
- Open a terminal with Terminal > New Terminal
- run the command `npm run dev` from the `frontend` working directory
- when you receive the error message, ask Cascade `What went wrong?`
- Cascade will be able to reason over your recent failed terminal command

## Cascade's Tools

### Terminal Integration
- Close all files and ensure you are starting from the git branch's HEAD `git reset HEAD --hard`. Ensure you are in a new Cascade Chat window with no conversation history
- Ask Cascade `Run all python tests in my backend`
- Note how there is a failing python test. Work with Cascade to research what is causing the failing test. 
  - You choose - is the test wrong, or is the implementation?

### Semantic Search 
- Ask Cascade `Do a semantic search on my @frontend directory to help me understand the structure and contents of this code. I want you to propose some next steps of what I should work on based on what you discover`

### Browser Preview

Browser Preview allows you to view local deployments of your application directly within the IDE or in an external browser. This feature enables rapid iteration by making it easy to send elements and errors back to Cascade as context.

#### Getting Started

There are two ways to open a preview:
- Ask Cascade to preview your app
- Click the Web icon in the Cascade toolbar to automatically generate the preview prompt

#### Core Functionality

#### Sending Elements to Cascade

You can select and send UI elements or error messages directly to Cascade:

1. Click the "Send element" button in the bottom right corner of the preview
2. Select the element you want to analyze
3. The selected element will be inserted into your Cascade prompt as an @ mention
4. Add as many elements as needed to your prompt

#### In-IDE Preview

Windsurf can open a Preview as a new tab in your editor, allowing you to view your web app alongside your Cascade panel.

Since these previews are hosted locally, you can also:
- Open them in your system browser
- Use all listeners and element selection features
- Send console errors directly to Cascade

**Note:** The element selection and error reporting features are optimized for Google Chrome, Arc, and Chromium-based browsers.

#### Best Practices

* Use browser previews for rapid UI debugging and iteration
* Send complex UI components to Cascade for detailed analysis
* Combine element selection with specific questions for targeted assistance

#### Disabling Previews

To disable the preview functionality:
- Click the Web icon and select "Disable previews"
- Alternatively, disable from Windsurf - Settings

This prevents Cascade from making preview-related tool calls.

### Deploys

App Deploys allows you to quickly deploy your web applications to a public URL for sharing and testing. This feature streamlines the deployment process directly from your development environment.

#### Getting Started

To deploy your application, simply ask Cascade:
```
"Deploy this project to Netlify"
"Update my deployment"
```

#### Core Functionality

#### Deployment Process

When you use App Deploys, Cascade will:

1. Analyze your project to determine the appropriate framework
2. Securely upload your project files to our server
3. Create the deployment on the provider's platform
4. Provide you with a public URL and claim link

Your deployed site will be available at a public URL formatted as:
```
<SUBDOMAIN_NAME>.windsurf.build
```

#### Project Configuration

To facilitate redeployment, a `windsurf_deployment.yaml` file is created at the root of your project. This file contains essential information for future deployments, such as:
- Project ID
- Framework type
- Deployment settings

#### Claiming Your Deployment

After deploying, you'll receive a claim URL that allows you to:
- Transfer the project to your personal provider account
- Gain full control over the deployment
- Access provider-specific features
- Modify the domain name

**Note:** Unclaimed deployments may be deleted after a certain period. We recommend claiming important projects promptly.

#### Supported Frameworks

App Deploys works with most popular JavaScript frameworks, including:
- Next.js
- React
- Vue
- Svelte
- Static HTML/CSS/JS sites

#### Best Practices

* Only deploy code that you're comfortable sharing publicly
* Claim important deployments promptly to maintain control
* Use the configuration file for consistent redeployments
* Consider security implications when deploying applications with sensitive data

#### Security Considerations

**Warning:** Your code will be uploaded to our servers for deployment. We take several precautions to ensure security:

* File size limits and validation
* Rate limiting based on your account tier
* Secure handling of project files

## Customizations
Cascade offers a few ways you can customize its behavior for the Collaborative, Agentic experience.

### Rules

Rules allow you to define specific guidelines for Cascade to follow when generating code or providing assistance. They help ensure consistency and adherence to your project's standards.

#### Getting Started

Rules can be defined at two levels:
- **Global level**: Applied across all workspaces
- **Workspace level**: Specific to a particular project

To manage rules:
1. Click the Customizations icon in the top right slider menu in Cascade
2. Navigate to the Rules panel
3. Click `+ Global` or `+ Workspace` to create new rules

#### Core Functionality

#### Activation Modes

Rules can be activated in four different ways:

1. **Manual**: Activated via @mention in Cascade's input box
2. **Always On**: Applied automatically to all interactions
3. **Model Decision**: Applied based on a natural language description
4. **Glob**: Applied to files matching a specific pattern (e.g., `*.js`, `src/**/*.ts`)

#### Example: Regex Documentation Rule

This codebase has a preconfigured rule for regex documentation. To see it in action:

1. Open `.windsurf/rules/documentation-guide.md` to view the rule definition
2. Ask Cascade to create a regex pattern

The rule ensures all regex patterns include:
- Plain English explanation of what the pattern matches
- Example of a matching string
- Examples of non-matching strings

```javascript
// This regex validates email addresses
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// Matches: user@example.com
// Doesn't match: user@, user@example, @example.com
```

#### Best Practices

* Keep rules simple, concise, and specific
* Format using bullet points, numbered lists, and markdown
* Use XML tags to group similar rules together
* Avoid generic rules already built into Cascade
* Limit rule files to 6000 characters each

**Note:** If total rules exceed 12,000 characters, priority is given to global rules, followed by workspace rules.

### Workflows

Workflows enable you to define a series of steps that guide Cascade through repetitive tasks, such as deploying services or responding to PR comments. These reusable sequences are saved as markdown files for easy access by you and your team.

#### Getting Started

To create and manage workflows:

1. Click the Customizations icon in the top right slider menu in Cascade
2. Navigate to the Workflows panel
3. Click the + Workflow button to create a new workflow

Workflows are saved in the `.windsurf/workflows/` directory within your repository.

#### Core Functionality

Each workflow consists of:
- A title and description (in YAML frontmatter)
- A series of numbered steps with specific instructions
- Optional annotations for automation

To execute a workflow, simply type `/[workflow-name]` in Cascade. For example:
```
/fe-build-debug-stage
```

Cascade will then guide you through each step of the workflow sequentially.

#### Example: Frontend Build and Commit Workflow

This example workflow ensures that frontend changes build correctly before committing them to the codebase:

```markdown
---
description: This is a common workflow for immediately preceding a git commit. It builds and stages changes
---

The changes currently active must correctly build in the frontend directory before committing into the code base.

Follow these steps:
1. run an `npm run build`
2a. If the build fails, research why the build failed and begin to suggest fixes. Reason over the easiest path to remediation. Cease the workflow here
3. If the build succeeds, research what changes are unstaged and the contents of those changes
4. Stage the changes
5. propose a meaningful git commit message. Use git commit best practices to convey your understanding of the staged changes that are ready to commit
```

When you invoke this workflow with `/fe-build-debug-stagecommit`, Cascade will:
1. Run the build command and check for success
2. Analyze any unstaged changes if the build succeeds
3. Help stage the changes
4. Suggest an appropriate commit message based on the changes

#### Best Practices

* Keep workflows focused on specific, repeatable tasks
* Use clear, numbered steps for easy following
* Include decision points for handling different outcomes
* Add descriptive comments to explain complex steps
* Use automation annotations judiciously for safe commands

**Note:** You can also ask Cascade to generate workflows for you based on your description of a repetitive process.

