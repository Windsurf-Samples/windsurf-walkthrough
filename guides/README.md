# Windsurf Editor Modalities

> **Note**: This set of sample instructions is intended for the Windsurf Editor. If you are using the Windsurf Plugins/Extensions, your Windsurf Tab and Cascade experience may vary.

Windsurf provides three primary modalities for AI-assisted development:

## 1. Windsurf Cascade

Cascade is a collaborative, agentic AI assistant that represents the evolution of traditional chat assistants. It's designed for complex, multi-step tasks and deep code analysis.

### Key Features
- **Code Analysis**: Analyzes codebases, explains code, and suggests improvements
- **Multi-tool Integration**: Access to terminal commands, file editing, and browser previews
- **Context-Aware**: Understands recent terminal outputs and browser interactions
- **Workflow Automation**: Supports custom workflows for repetitive tasks

### Common Use Cases
- Complex refactoring across multiple files
- Debugging build errors and test failures
- Project-wide code analysis
- Deployment and infrastructure tasks

## 2. Windsurf Command

Command is an inline AI-assisted code editing feature focused on quick, targeted code improvements. It reduces low-entropy keystrokes for small-scoped tasks.

### Key Features
- **Inline Editing**: Quick code modifications through popup interface
- **CodeLens Integration**: Direct access to common actions via editor breadcrumbs
- **Terminal Integration**: Natural language package management
- **Follow-up Refinement**: Iterative improvements through follow-up prompts

### Common Use Cases
- Code cleanup and refactoring
- Adding documentation
- Installing packages in the terminal
- Code style improvements

## 3. Windsurf Tab

Tab is an intelligent code completion tool that speeds up coding through context-aware suggestions and automated actions.

### Key Features
- **Smart Autocomplete**: Context-aware code completions
- **Supercomplete**: Multi-line code block suggestions
- **Tab to Jump**: Intelligent cursor positioning
- **Tab to Import**: Automatic dependency management

### Common Use Cases
- Code pattern completion
- Boilerplate generation
- Smart code navigation
- Dependency imports

## Best Practices

### When to Use Each Modality

- **Use Cascade** for:
  - Complex, multi-step tasks
  - Cross-file changes
  - Project-wide analysis
  - Deployment and configuration

- **Use Command** for:
  - Quick, single-file edits
  - Code cleanup
  - Adding documentation
  - Package management

- **Use Tab** for:
  - Rapid code completion
  - Repetitive patterns
  - Import management
  - Navigation between related code sections

## Getting Started

1. **Cascade**: Open the Cascade chat window and start describing your task
2. **Command**: Use `Command + I` or click the "Edit" button that appears when selecting code
3. **Tab**: Look for tab indicators while coding and press `Tab` to accept suggestions

For detailed examples and workflows, check the individual modality files:
- [`cascade.md`](cascade.md)
- [`command.md`](command.md)
- [`windsurf-tab.md`](windsurf-tab.md)