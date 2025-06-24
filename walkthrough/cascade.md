# Windsurf Cascade 
Windsurf Cascade is a Collaborative, Agentic AI-assistant. Cascade has access to research your code base, invoke tools to edit your code and run terminal commands, and understand your recent actions (your current trajectory) to derive your next intent. For full documentation on Cascade, see the [Windsurf Documentation](https://docs.windsurf.com/windsurf/cascade/cascade)

 Let's walk through some examples to get you started with using Cascade!

## Set Up 
Cascade can make setup as easy as one prompt:
> **Try this:**
> Run this prompt in the Cascade window on the right side of the IDE
> ```text
> /initialize-dev-environment
> ```

<div style="margin: 24px 0;"><img src="assets/cascade/workflow-setup.png" alt="Set Up Image" width="200"/></div>

**What you'll see:** With one prompt, Cascade will automatically analyze your codebase, install the necessary dependencies, and launch an in-IDE browser preview of our website. 

This is an example of a workflow in Windsurf, a defined series of steps to easily execute repetitive tasks. You can learn more about workflows and how to set up your own [Here](https://docs.windsurf.com/windsurf/cascade/workflows).

## Write and Chat
With advanced context awareness of your codebase, Cascade can easily make changes and explain any unfamiliar sections of code. 
> **Try this:**
> Set Cascade to write mode and input this prompt
> ```text
> Explain how ContactForm works and how the form submission is handled
> ```

**What you'll see:** Cascade will analyze your files and provide a detailed overview of the form logic. Chat is a great way to explore unfamiliar databases and reason over implementation logic.

> **Try this:**
> Set Cascade to chat mode and input this prompt
> ```text
> Add a required Company Name input field to the contact form. It should appear below the Email field and be included in the handleSubmit function’s validation logic
> ```

**What you'll see:** Cascade will generate and modify code to implement your prompt, asking for clarification or permission to run terminal commands as necessary.

## Planning Mode
Let's try something a bit more advanced! Currently, the UI looks fairly plain, with planning mode we can implement a complete UI overhaul with a just a few prompts.

For detailed documentation on planning mode, click [Here](https://docs.windsurf.com/windsurf/cascade/planning-mode).

> **Try this:**
> Turn planning mode on using the checklist icon in the Cascade panel and input this prompt
> ```text
> Create a detailed plan to improve the Contact Form UI: Apply a modern, professional layout with better spacing and alignment. Style input fields and labels to improve accessibility and readability
> ```

**What you'll see:** Cascade will generate an implementation plan structured as a local markdown file with clear goals and action items. Once created you can manually edit the plan or ask Cascade for any modifications.

> **Try this:**
> Ask Cascade to implement the plan
> ```text
> Implement the plan
> ```

**What you'll see:** Cascade will implement the plan step by step. You can step in at any time to change direction or ask Cascade to modify the plan. Once done, you should see the updated, modern UI directly in the in-IDE preview.

## Adding Context
Part of what makes Cascade so powerful is our advanced context engine which works in the background to help Cascade understand your intent.

Additionally, you can add screenshots, directly pull elements from previews, and utilize keyboard shortcuts to direct Cascade manually. For more information on Context Awareness, click [Here](https://docs.windsurf.com/context-awareness/windsurf-overview).

> **Try this:**
> Feel free to browse the code files in contact-form-app. To reference a specific line of code, highlight the code segment and add it as context to Cascade by hitting `Cmd/Ctrl + L`.

**What you'll see:** Cascade will add the code segment as context to the conversation.

> **Try this:**
> Navigate to the in-IDE preview and click Select Element. Add any element from the preview to the conversation.

**What you'll see:** Cascade will add the element as context to the conversation, making it seamless to reference any UI elements directly.

Find more information on Previews [Here](https://docs.windsurf.com/windsurf/previews).

