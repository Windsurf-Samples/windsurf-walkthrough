# Windsurf Cascade Demo
Windsurf Cascade is a Collaborative, Agentic AI-assistant and is the natural evolution of a Chat Assistant. Cascade has access to research your code base, invoke tools to edit your code and run terminal commands, and

**Note** Cascade is highly flexible as an Agentic System. This demo will walk through some of Cascade's core capabilities, but will be nonexhaustive

## Working with Code
Cascade is a great assistant for communicating with an AI Assistant about your code base 
### Explaining Code via CodeLens
Open `contact-form-app/backend/app.py` and place your cursor at the end of the line 
```python
def submit_contact():
```
Click the `Explain` option at the top of the breadcrumbs in the editor

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

### Explaining errors
Naviate to `contact-form-app/frontend/tsconfig.json` and edit the first line to the following:


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

### Browser preview
### Deploys

## Customizations
Cascade offers a few ways you can customize its behavior for the Collaborative, Agentic experience

### Rules
This code base has some preconfigured rules. open `.windsurf/rules/regex-guide.md` to see the regex inline documenting rule. To test this always-on rule, simply Ask Cascade:
`
### Workflows

