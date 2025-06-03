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
In `ContactForm.tsx`, add form validation by typing:
```typescript
// Start typing in validateForm function:
if (!formData.name.trim()) {
  // Windsurf will suggest validation logic
}
```

### Example 2: Success Message
Add a success message state:
```typescript
// Start typing at the top of the component:
const [success
// Windsurf will suggest: const [successMessage, setSuccessMessage] = useState('');
```


## Supercomplete
Supercomplete suggests multi-line completions and code blocks, even outside your cursor location.

### Example: New form field
In `ContactForm.tsx`, :
```typescript
// Start typing a new `phone` field in the ContactFormData interface
interface ContactFormData {
  ...
  phone: string;
}
```
Windsurf Tab will now either help you jump to the contact form formData initial state to add a phone field or suggest a supercomplete block to add a phone field.

## Tab to Jump
Tab to Jump anticipates where you might want to move your cursor next and lets you jump there with a single Tab press.

After adding the phone field from the Supercomplete block from above, you may see Tab to Jump invoke automatically to move your cursor to the next logical location

## Tab to Import
Tab to Import automatically suggests and adds missing imports when you use new dependencies.

### Example: Adding Validation via YUP package
In `ContactForm.tsx`, start using a validation library:
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
