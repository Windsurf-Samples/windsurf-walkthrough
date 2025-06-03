# Windsurf Chat (Legacy Plugins)
Windsurf Chat lets you converse with your codebase directly inside your IDE. Powered by the context-awareness engine, Chat retrieves relevant code and metadata to answer questions, generate code, and perform common tasks.

## Supported IDEs
Chat and its related features are supported in:
- VS Code (sidebar panel)
- JetBrains IDEs (tool window)
- Eclipse, X-Code, and Visual Studio

## Getting Started
1. Open the Chat panel in your editor:
   - **VS Code:** click the Windsurf icon in the left sidebar or press <kbd>⌘⇧A</kbd> / <kbd>Ctrl⇧A</kbd>.
   - **JetBrains:** open **View → Tool Windows → Windsurf Chat**.
2. Type a question about your code and press **Enter**.

## Core Functionality

### @-Mentions
Use `@` to deterministically include context in your prompt:
- `@MyComponent` – a React component
- `@frontend` – a directory
- `@diff` – the current git diff (beta)

### Persistent Context
Open the **Advanced** tab to pin files, directories, or snippets that should persist across messages.

### Slash Commands
Currently `/explain` is available:
```
/explain Why is useEffect missing a dependency?
```

### Copy & Insert
Hover any code block in a response to **Copy** or **Insert** it at the cursor position.

### Inline Citations
Chat links referenced code so you can quickly jump to the source.

### Regenerate with Context
Press <kbd>⌘⏎</kbd> (or the ✨ icon) to force Chat to include code context.

### Stats for Nerds
Click the 📊 icon to view token counts, latency, and context size for each message.

### Chat History
Click the 🕘 icon to browse, export, or start a new conversation.

### Settings & Telemetry
Open the ⚙️ icon to adjust theme, autocomplete speed, and diagnostics.  
**Telemetry must be enabled** for Chat to function.

## Example — Validating Email Input
Below is a TypeScript helper from `contact-form-app/frontend/src/utils/validation.ts`. Ask Chat: _"Rewrite this function to return detailed error messages."_

```typescript
// Checks if a string is a valid e-mail address
//  • ^[\w.-]+        →  one or more word, dot, or dash characters at start
//  • @               →  literal at-sign separates local and domain parts
//  • [\w.-]+         →  domain name (sub-domains allowed)
//  • \\.[A-Za-z]{2,}$ →  top-level domain 2+ letters at end
// Matches: "user@example.com"
// Fails:   "user@", "example.com", "@example.com"
export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};
```

After sending the prompt with the highlighted code, Chat will explain the regex and propose a refactor that returns explicit validation errors.

## Best Practices
* Keep questions specific: "Why does `sanitizeInput` trim twice?"  
* Pin important context (config files, APIs) at the start of a session.
* Use `@diff` before commits to review changes with Chat.
* Add as much context as possible, the example above includes comments, a matching example, and failing examples (as shown above).
* Use `@` mentions to include context in your prompt.

---