# Windsurf Cascade 

Windsurf Cascade is a Collaborative, Agentic AI-assistant and is the natural evolution of a Chat Assistant. Cascade has access to research your code base, invoke tools to edit your code and run terminal commands, and understand your recent actions (your current trajectory) to derive your next intent.

**Note:** Cascade is highly flexible as an Agentic System. This demo will walk through some of Cascade's core capabilities, but will be nonexhaustive.

## Table of Contents

- [Write and Chat Mode](#write-and-chat-mode)
- [Credits and Usage](#credits-and-usage)
- [Selecting Your Models](#selecting-your-models)
- [Rules](#rules)
- [Memories](#memories)
- [Workflows](#workflows)
- [Plugins (MCP)](#plugins-mcp)
- [Planning Mode](#planning-mode)
- [Browser Previews](#browser-previews)
- [Deploy](#deploy)

### Write and Chat Mode
Cascade offers two interaction modes:


- **Write** – for directly generating and modifying code.
- **Chat** – for asking questions or exploring ideas *without* immediate file changes.

You can toggle between them to match your workflow and intent.

![Write and Chat Mode Image](assets/cascade/write-and-chat.png)

Example 1: 
Let's start by 

Example 2:
Enable chat mode in Cascade. Try asking Cascade to
```text
    Explain how ContactForm works and how the form submission is handled
```
As you can see, Cascade will analyze your files and provide a detailed overview of the form logic. Chat is a great way to explore unfamiliar databases and reason over implementation logic.

Example 3:
Enable write mode in Cascade. Try asking Cascade to
```text
    Add a required Company Name input field to the contact form. It should appear below the Email field and be included in the handleSubmit function’s validation logic
```
With write mode, Cascade can generate and modify code to implement your prompt, asking for clarification or permission to run terminal commands as necessary. 

## Credits and Usage

Windsurf uses a credit system to track AI usage across different models. You can monitor your remaining credits in the settings panel, with usage varying based on the model selected—some models are free, others cost credits per message.

To view your credit usage, click the three dots in the top right of the Cascade window and select `Cascade Usage`.

![View your credit usage](assets/cascade/cascade-credits.png)

## Selecting Your Models
Cascade supports a wide range of models to provide maximum developer optionality. You can freely switch between various models in the same Cascade conversation to balance cost, performance, and speed. 

![Selecting Your Models Image](assets/cascade/model-selection.png)

Explore prompting with different models to find the best models for your use case! Try prompting Cascade to explain the form validation logic with different models to see the differences in responses. 

Generally, users will find that models such as OpenAI o3, Claude 3.7 Sonnet (Thinking), and Gemini 2.5 Pro work well for planning and implementing complex tasks. For quick implementations and edits, GPT-4.1, SWE-1, and Gemini 2.5 Pro are commonly used.


## Rules

Rules are persistent instructions that guide Cascade’s behavior, enforcing things like code style or architectural patterns. You can define global or project-specific rules, which Cascade will follow automatically or on request.

To define rules, click the `Customizations` icon at the top right of the Cascade window.

![Access the Customizations tab](assets/cascade/cascade-customizations.png)

In the Customizations tab, click the `Rules` tab.

![Rules tab](assets/cascade/cascade-rules.png)

Here, you can add Global Rules (rules applied across all workspaces) and Workspace Rules (rules specific to a single workspace). In this tab, you can see some example rules, which you can modify or delete. To add a new Workspace Rule, click the `+ Workspace` button, give it a name of `full-stack-dev`, and add the following text below to the `Content` section:

```markdown
# General Code Style & Formatting

- Use PascalCase for React component file names (e.g., UserCard.tsx, not user-card.tsx).
- Prefer named exports for components.

# Project Structure & Architecture

- My project is a full-stack application built with Next.js and Flask inside of the contact-form-app folder.
- Follow Next.js patterns and use the Pages Router.
- Correctly determine when to use server vs. client components in Next.js.

# State Management & Logic

- Use React Context for state management.

# Backend

- The backend is built in Flask.
```

Once you've saved the file, select `Always On` for the Activation Mode.

![Activation Mode](assets/cascade/cascade-rules-activation.png)


## Memories
Memories let Cascade retain important project context across sessions. Cascade may automatically generate and store memories during conversation or you can explicitly prompt Cascade to store a memory. 

Example:
Ask Cascade to
```text
Create a memory to follow a professional, minimal design for all UI changes
```
Now, Cascade will remember your design preferences even in new conversations. You can manage your various workspace memories using the `Customizations` tab located in the top right corner of the Cascade panel. 

![Memories Image](assets/cascade/memories.png)

## Workflows

Workflows are reusable sequences of steps that automate common tasks (like responding to PRs or deploying services). They’re defined in markdown and can be triggered via slash commands in Cascade.

To define workflows, click the `Customizations` icon at the top right of the Cascade window.

![Access the Customizations tab](assets/cascade/cascade-customizations.png)

In the Customizations tab, click the `Workflows` tab.

![Workflows tab](assets/cascade/cascade-workflows.png)

Here, you can add Workflows to your workspace. In this tab, you can see some example workflows, which you can modify or delete. To add a new Workflow, click the `+ Workflow` button, give it a description of `Run the project`, and add the following text below to the `Content` section:

```markdown
1. Navigate to the contact-form-app directory
2. Start a terminal
3. Navigate to the 'frontend' directory
4. Check dependencies and install if necessary
5. Run the 'npm start' command
6. Start a second terminal
7. Navigate to the 'backend' directory
8. Create venv if necessary and install dependencies; otherwise, activate venv
9. Run the 'python3 app.py' command
```

Once you've saved the file, you can run the workflow by typing `/run-project` in the Cascade window.

## Plugins (MCP)

Plugins extend Cascade’s capabilities by connecting it to external tools (like GitHub or Figma) via the Model Context Protocol (MCP). You can install, manage, and configure plugins directly from the IDE.

To install plugins, click the `Plugins` icon at the top right of the Cascade window.

![Access the Plugins tab](assets/cascade/cascade-plugins.png)

Select Puppeteer from the list of available plugins and click the 'Install' button.

![Install Puppeteer](assets/cascade/cascade-puppeteer.png)

In the Cascade window, you can now use Puppeteer to automate tasks like clicking buttons or filling out forms. Try it out by asking Cascade to `Navigate to https://windsurf.com/. Find the Pricing section and navigate to it. Take a screenshot of the resulting screen.`.

## Planning Mode            
Planning Mode generates a comprehensive plan that Cascade can refer to and update throughout the implementation of more complex tasks. It’s a powerful tool that enables you to stay in control, reduce errors, and make steady progress, even in large or unfamiliar codebases. 

Example:

In the bottom right corner of the Cascade panel, click the checklist icon to enable planning mode. 

![Plan Mode Icon](assets/cascade/plan-mode-icon.png)

Prompt Cascade to
```text
Create a detailed plan to improve the Contact Form UI: Apply a modern layout with better spacing and alignment. Style input fields and labels to improve accessibility and readability
```

Cascade will generate an implementation plan structured as a local markdown file with clear goals and action items. Once created you can manually edit the plan or ask Cascade for any modifications. 

![Planning Mode](assets/cascade/planning-mode.png)

Now try asking Cascade to begin implementation. Throughout the implementation, Cascade will continuously refer back to the plan, marking items complete and modifying the scope as necessary. 

## Browser Previews         
Previews in Windsurf allow you to view the local deployment of your app either in the IDE or in the browser (optimized for Google Chrome, Arc, and Chromium based browsers) with listeners, allowing you to iterate rapidly by easily sending elements and errors back to Cascade as context.

![Preview Icon](assets/cascade/preview-icon.png)

Example: Click the Preview icon near the Chat box and select start preview. If prompted, install necessary dependencies and start the development server. Select Windsurf Browser when prompted to open your website preview. Once your browser is open try sending context over to Cascade! 


![Browser Previews Command](assets/cascade/website-preview.png)

With Select Element you can send specific components such as text boxes and headers to your Cascade prompt. Send Logs will retrieve and send console logs to Cascade. Finally, Screenshot can quickly show Cascade what the current page looks like. 

![Browser Previews](assets/cascade/windsurf-browser-example.png)

If you want to see it in action try using Select Element to select the header component. Now, prompt Cascade to change the header color to your favorite color. 

## Deploy

With one click, you can deploy your app directly from the IDE using Windsurf’s integration with Netlify. Cascade handles the build and deployment, giving you a live URL for sharing or testing.

To deploy your application, you can click the `Deploy` icon under the chatbox in the Cascade window or tell Cascade to `Deploy my application`. Cascade will then deploy your application and give you a live URL for your frontend application.

![Deploy](assets/cascade/cascade-deploy.png)

