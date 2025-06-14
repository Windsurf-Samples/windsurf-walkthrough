# Windsurf Command Demo
Windsurf Command is an AI-assisted code editing feature that helps you inline and follows user prompts. Command reduces low-entropy keystrokes for small scoped tasks

## Example 1
- Open the `contact-form-app/frontend/src/components/ContactForm.tsx` file and highlight the below code
```typescript
// Validates string length is between min and max
const isStringLengthValid = (str: string, min: number, max: number): boolean => {
  const length = str.trim().length;
  if (length < min) {
    return false;
  }
  if (length > max) {
    return false;
  }
  return true;
};
```

- Use the Command shortcut `Command + I` or click the "Edit" button that appears to toggle the Windsurf Command popup.
- Enter `one line` and watch the suggested edit
- Before accepting the suggestion, enter the follow up prompt `include return statement`
- Accept Command's suggestion

## Example 2 via CodeLens 
- Open the `contact-form-app/frontend/src/components/ContactForm.tsx` file and move your cursor to the end of the below line
```typescript
const sanitizeInputString = (inputString: string): string => {
```
- Click the `Refactor` option at the end of the navigation breadcrumbs at the top of the editor
- Select `Clean up this code` in the next dropdown
- Review the suggestions and Accept/Reject


## Example 3 (via CodeLens)
- Open the `contact-form-app/frontend/src/components/ContactForm.tsx` file and move your cursor to the end of the below line
```typescript
const ContactForm: React.FC = () => {
```
- Click the `Add Docstring` option at the end of the navigation breadcrumbs at the top of the editor
- Accept/reject the suggested edits by Command

## Example 4 (in the terminal)
- click Terminal -> New Terminal
- click into the terminal and open the command popup with `Command + I`
- request to import a package in natural english with the prompt `install material ui into my contact-form-app/frontend directory`
- optionally click enter when it succeeds or submit a follow up (ex: `just install material ui` if multiple packages are suggested on first generation)

![Command Terminal 1](./assets/command-terminal-1.png)
![Command Terminal 2](./assets/command-terminal-2.png)

