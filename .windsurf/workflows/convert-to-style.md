---
description: A style guide that describes how the documentation for the scripts directory should be produced.
---

Current Script Documentation Style

Structure:
Organized by modality and feature
Uses clear hierarchical headings (# for main titles, ## for sections, ### for subsections)
Includes practical examples with step-by-step instructions

Content Format:
Concise introductory paragraphs explaining the feature/concept
Code blocks with syntax highlighting for examples
Bulleted lists for step-by-step instructions
Notes and callouts for important information

Tone:
Direct and instructional
Focuses on practical usage rather than theoretical concepts
Stripe Documentation Style Elements
Clarity and Precision:
Clear, concise explanations with minimal jargon
Consistent terminology throughout documentation
Practical examples that demonstrate real-world usage

Visual Structure:
Clean, hierarchical organization
Code examples alongside explanations
Clear distinction between different types of content

User-Focused Approach:
Anticipates user questions and provides answers
Includes best practices and common pitfalls
Provides complete working examples
Recommended Style Language
Document Structure

Title and Introduction:
Begin with a clear, descriptive title using a single # heading
Follow with a concise 1-2 ssentence introduction explaining the purpose/value

Example:

# Windsurf Cascade
Windsurf Cascade is a Collaborative, Agentic AI-assistant that helps you research, edit code, and run commands.
Section Organization:
Use ## for main sections
Use ### for subsections
Include a "Setup" section when relevant
Group related functionality together
End with "Tips" or "Best Practices" section

Example Format:
Introduce examples with clear headings
Provide context before code blocks
Use syntax highlighting for all code blocks
Include expected outcomes or results
Content Style

Voice and Tone:
Use present tense and active voice
Direct, instructional language for steps
Conversational but professional tone
Avoid unnecessary technical jargon

Code Examples:
Always include language identifier in code blocks
Show complete, working examples when possible
Include comments for complex code sections
For regex patterns, include inline documentation explaining the pattern's purpose, along with example matches and non-matches

Visual Elements:
Use bulleted lists for sequential steps
Use numbered lists for procedures that must be followed in order
Include notes and warnings in a consistent format
Use consistent formatting for keyboard shortcuts

Component Documentation:
Always include docstrings for React Components
Document props, state, and key functionality
Explain component relationships when relevant
Best Practices

Consistency:
Maintain consistent terminology throughout
Use the same format for similar types of content
Keep heading hierarchy consistent
Completeness:
Include all necessary steps for examples
Document edge cases and potential issues
Provide troubleshooting guidance when appropriate

User Focus:
Anticipate common questions and address them
Include tips for efficient usage
Highlight best practices
Example Documentation Template
markdown

# Feature Name
A concise description of what this feature does and its primary benefit to users.

## Setup
Prerequisites and initial setup steps required to use this feature.

## Core Functionality
Explanation of the main capabilities with examples.

### Example: Specific Use Case
Description of what this example demonstrates.

```typescript
// Example code with comments
const example = () => {
  // Explanatory comment
  return result;
};
Expected outcome or result.

Best Practices
Recommendation 1
Recommendation 2
Recommendation 3

Tips
Helpful tip 1
Helpful tip 2


This style guide combines the strengths of your current documentation with elements from Stripe's highly regarded documentation approach, creating a consistent, clear, and user-focused documentation style.