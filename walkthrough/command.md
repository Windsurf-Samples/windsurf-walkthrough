# Windsurf Command Demo
Windsurf Command is an AI-assisted code editing feature that helps you inline and follows user prompts. Command reduces low-entropy keystrokes for small scoped tasks

See detailed documentation on Command [Here](https://docs.windsurf.com/command/windsurf-overview).

## Example 1
Open the `contact-form-app/frontend/src/components/ContactForm.tsx` file and highlight the below code
```typescript
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
> **Try this:**
> Use the Command shortcut `Command + I` and type 'add docstring'

**What you'll see:** Command will generate a detailed docstring for the function in the editor.

## Example 2
Open the terminal in the editor.

> **Try this:**
> Click into the terminal and open the command popup with `Command + I`.
> Request to import a package in natural english with the prompt `install material ui into my contact-form-app/frontend directory`
> 
>Optionally click enter when it succeeds or submit a follow up (ex: `just install material ui` if multiple packages are suggested on first generation)

**What you'll see:** Command will generate a proper CLI command and run it in the terminal.

![Command Terminal 1](./assets/command-terminal-1.png)
![Command Terminal 2](./assets/command-terminal-2.png)

