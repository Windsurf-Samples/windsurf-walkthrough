# Windsurf Cascade Core Demo

Windsurf Cascade is a Collaborative, Agentic AI-assistant and is the natural evolution of a Chat Assistant. Cascade has access to research your code base, invoke tools to edit your code and run terminal commands, and understand your recent actions (your current trajectory) to derive your next intent.

**Note:** Cascade is highly flexible as an Agentic System. This demo will walk through some of Cascade's core capabilities, but will be nonexhaustive.

## Setup

1. Ensure you are at the git HEAD with `git reset HEAD --hard`

## Working with Code

Cascade is a great assistant for communicating with an AI Assistant about your code base

### Planning Mode

- Close all files and ensure you are starting from the git branch's HEAD `git reset HEAD --hard`. Ensure you are in a new Cascade Chat window with no conversation history
- Enable Planning Mode (checkbox icon in the bottom left beneath the chat input box)
- Ask Cascade `I want to add a phone number field to the contact form. Help me understand the structure and contents of this code and scope out the next steps based on what you discover.`

### Explaining Code (via CodeLens)

Open `contact-form-app/frontend/src/components/ContactForm.tsx` and place your cursor at the end of the line

```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
```

Click the `Explain` option at the top of the breadcrumbs in the editor

### Explain Problems (via Intellisense)

Open a Cascade new window. Then, open `contact-form-app/frontend/tsconfig.json` and edit the line from

```json
    "target": "es5",
```

to

```json
    "target": "es15",
```

Because es15 is not a valid target, Intellisense can provide a popup for Cascade to explain and fix the problem. The shortcut is `Command + Shift + .`

### Inline Edits

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

## Flow/Context Awareness

### Continue the flow

- Close all files and ensure you are starting from the git branch's HEAD `git reset HEAD --hard`. Ensure you are in a new Cascade Chat window with no conversation history
- Turn off Planning Mode if it isn't already off
- Open `contact-form-app/backend/app.py`
- Change the line

```
@app.route('/api/contacts', methods=['POST'])
```
to
```
@app.route('/api/submit-contact', methods=['POST'])
```
and change 
```
@app.route('/api/contacts', methods=['GET'])
```
to
```
@app.route('/api/get-contacts', methods=['GET'])
```

### Multi-file Edits

- Type in Cascade: `Continue by updating all call sites`

## Rules + Workflows

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


