# Windsurf Tab Demo
Windsurf Tab is a powerful AI-assisted coding feature that helps you write code faster and more efficiently. This demo will showcase its capabilities using a Contact Form application as an example.

## Setup
1. Ensure you are at the git HEAD with `git reset HEAD --hard`
1. Open these files in your editor:
   - `contact-form-app/frontend/src/components/ContactForm.tsx`
   - `contact-form-app/backend/app.py`

## Autocomplete
Autocomplete helps you write code faster by suggesting completions at your cursor position. Press `Tab` to accept suggestions.

### Example 1: Form Validation
In `ContactForm.tsx`, add form validation by typing the below in the `validateForm` function following the line `const newErrors: FormErrors = {};`:
```typescript
if (!formData.name.trim()) {
  // Windsurf will suggest validation logic
}
```

Depending on whether your cursor is inside or outside, you will see the suggestion appear as Autocomplete or Supercomplete

![Autocomplete](./assets/autocomplete.png)
![Supercomplete](./assets/supercomplete.png)


### Example 2: Success Message
Add a success message state in `ContactForm.tsx` under the `const ContactForm: React.FC = () => {` line:
```typescript
// Start typing:
const [success
// Windsurf will suggest: const [successMessage, setSuccessMessage] = useState('');
```

### Example 3: Markdown Updates
Open `script/windsurf-tab.md`. The edit will be to this markdown file in the following sentence:

We recommend you then change the beginning of *this* sentence to say "it is recommended". Delete `We` and type `It is`, then autocomoplete should suggest to add the `ed` to the end of `recommend`

## Supercomplete
Supercomplete suggests multi-line completions and code blocks, even outside your cursor location. You may have seen supercomplete activate in the Autocomplete section.

Supercomplete appears as a pop up window

![Supercomplete](./assets/supercomplete-2.png)

## Tab to Jump
Tab to Jump anticipates where you might want to move your cursor next and lets you jump there with a single Tab press.

### Example 1: New form field
In `ContactForm.tsx`, under the `interface ContactFormData` line, add a new `phone` field:
```typescript
// Start typing a new `phone` field in the ContactFormData interface
interface ContactFormData {
  ...
  phone: string;
}
```
Windsurf Tab will now either help you jump to the contact form formData initial state to add a phone field or supercomplete will suggest a code blocks to add the phone field elsewhere in the file

After adding the phone field from the Supercomplete block from above, you should see Tab to Jump invoke automatically to move your cursor to the next logical location

## Tab to Import
Tab to Import automatically suggests and adds missing imports when you use new dependencies.

### Example: Adding Validation via YUP package
In `ContactForm.tsx`, start using a validation library. Add the following code after the import statements:
```typescript
// Start typing:
const schema = yup.object().shape({
  name: yup.string().min(2).max(50).required(),
  email: yup.string().email().required(),
  message: yup.string().min(10).max(500).required(),
  phone: yup.string().required(),
});
```
tab to import will add the import statement for `yup`

Yup is not downloaded on this project, so you may ignore the error or use Cascade to *Explain and Fix* `Cannot find module 'yup' or its corresponding type declarations`

## Keyboard Shortcuts
- **Accept suggestion**: `Tab`
- **Cancel suggestion**: `Esc`
- **Accept word-by-word**: `⌘+→` (VS Code), `⌥+⇧+\` (JetBrains)
- **Next/previous suggestion**: `⌥+]`/`⌥+[`

## Tips
1. Watch for the subtle Tab indicators that show where Windsurf can help
2. Use Tab to Import to automatically add missing dependencies
3. Let Supercomplete help with repetitive code patterns
4. Configure Tab settings in Windsurf preferences for your optimal experience
