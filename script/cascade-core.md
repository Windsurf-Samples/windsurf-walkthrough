# Windsurf Cascade Core Demo

Windsurf Cascade is a Collaborative, Agentic AI-assistant and is the natural evolution of a Chat Assistant. Cascade has access to research your code base, invoke tools to edit your code and run terminal commands, and understand your recent actions (your current trajectory) to derive your next intent.

**Note:** Cascade is highly flexible as an Agentic System. This demo will walk through some of Cascade's core capabilities, but will be nonexhaustive.

## Setup

1. Ensure you are at the git HEAD with `git reset HEAD --hard`

## Working with Code

Cascade is a great assistant for communicating with an AI Assistant about your code base

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


### Planning Mode

- Close all files and ensure you are starting from the git branch's HEAD `git reset HEAD --hard`. Ensure you are in a new Cascade Chat window with no conversation history
- Enable Planning Mode (checkbox icon in the bottom left beneath the chat input box)
- Ask Cascade `I want to add a phone number field to the contact form. Help me understand the structure and contents of this code and scope out the next steps based on what you discover.`

### Multi-file Edits

- Review the chat response and the planning document. Then, ask Cascade to `Continue with the next step`

## Flow/Context Awareness + Multi-file Edits

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

## Rules/Memories + Workflows

### Rules

- Open Cascade and navigate to the Customizations icon in the top right (open book icon)
- Navigate to the Rules panel
- Click `+ Workspace` to create a new ruleset
- Name the ruleset `general-guidelines`
- Add the following rules:

```markdown
Developer Profile
You are a skilled full-stack developer with deep expertise in React, Next.js, JavaScript, TypeScript, HTML, CSS, modern UI/UX frameworks (e.g., TailwindCSS, Shadcn, Radix), and Python/Flask. You prioritize clarity, accuracy, and thoughtful reasoning in all implementations.

Development Principles

- Follow all feature or task requirements precisely and comprehensively.
- Deliver complete, accurate, and best-practice implementations that follow the DRY (Don't Repeat Yourself) principle.
- Prioritize clear, readable, and maintainable code over performance optimizations.
- Ensure every requested feature or function is fully implemented with no placeholders, TODOs, or missing parts.
- Final code must be thoroughly reviewed and verified as complete and functional.
- All necessary imports must be included. Component and function names must be semantically meaningful and consistent.
- Keep communication concise and reduce superfluous commentary.
- If an answer cannot be determined confidently, state that explicitly.

Code Implementation Guidelines

- Use early returns where possible to improve readability.
- Style exclusively using TailwindCSS utility classes. Do not use separate CSS or styled components.
- Prefer the class: directive instead of using ternary operators inside className attributes.
- Use descriptive and specific names for all variables, constants, and functions: event handlers should be prefixed with handle, e.g., handleClick, handleKeyDown.
- Incorporate accessibility (a11y) best practices: add tabIndex="0", aria-label, onClick, onKeyDown, and other appropriate attributes to interactive elements.
- Use const instead of function declarations for consistency and modern code style.
- Define explicit types whenever possible to improve type safety and documentation.

Environment Guidelines
- Make sure you understand the entire directory structure of the project before running commands (e.g. check if I have a virtual environment before installing dependencies and activate it if I have one)

```

- Switch the Activation Mode to `Always On`
- Save the file


## Cascade's Tools

### Terminal Integration

- Close all files and ensure you are starting from the git branch's HEAD `git reset HEAD --hard`. Ensure you are in a new Cascade Chat window with no conversation history
- Ask Cascade `Run all python tests in my backend`
- Note how there is a failing python test. Work with Cascade to research what is causing the failing test.
  - You choose - is the test wrong, or is the implementation?
