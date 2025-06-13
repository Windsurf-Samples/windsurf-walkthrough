# Windsurf Cascade Advanced Demo

Windsurf Cascade is a Collaborative, Agentic AI-assistant and is the natural evolution of a Chat Assistant. Cascade has access to research your code base, invoke tools to edit your code and run terminal commands, and understand your recent actions (your current trajectory) to derive your next intent.

**Note:** Cascade is highly flexible as an Agentic System. This demo will walk through some of Cascade's core capabilities, but will be nonexhaustive.

## Setup

1. Ensure you are at the git HEAD with `git reset HEAD --hard`

## Cascade's Tools

### Terminal Integration

- Close all files and ensure you are starting from the git branch's HEAD `git reset HEAD --hard`. Ensure you are in a new Cascade Chat window with no conversation history
- Ask Cascade `Run all python tests in my backend`
- Note how there is a failing python test. Work with Cascade to research what is causing the failing test.
  - You choose - is the test wrong, or is the implementation?

### MCP + Figma Example

MCP is an open protocol that makes it easier for AI agents — like Cascade — to connect to tools, data, and context in a standardized way.

- Navigate to Windsurf's Plugins icon in the top right (blocks icon)
- Click on the 'Manage plugins' button
- Click on the 'View raw config' button
- Add the following to your config file:

```json
{
    "mcpServers": {
      "Framelink Figma MCP": {
        "command": "npx",
        "args": ["-y", "figma-developer-mcp", "--figma-api-key=<YOUR_FIGMA_API_KEY_HERE>", "--stdio"]
      }
    }
}
```
- Replace <YOUR_FIGMA_API_KEY_HERE> with your [Figma API key](https://www.figma.com/developers/api#access-tokens) (ensure you give the access token the highest permission level for each scope)
- Save the file
- Open [this file](https://www.figma.com/design/Cwly070h10bjPu8vcmzNNT/Contact-Form-Web-App-UI?node-id=0-1&t=SKd9yZs8ILHjE1ad-1) in Figma
- Copy the link to the Figma group called 'Icons'
- Ask Cascade to `Download the icons from this Figma group: <LINK_TO_FIGMA_GROUP>`

### Multimodal Capability
- Select the 'Home Page' in the Figma file and copy it as a PNG
- Paste the image into Cascade and ask Cascade to `Implement this design. You shouldn’t need your Figma MCP tools anymore. Use the assets we’ve downloaded previously as necessary.`


### Windsurf Browser
- Ask Cascade to `Run my app`
- Select 'Windsurf Browser' when prompted to open the website preview
- Click the 'Select element' in the bottom right of the Windsurf Browser and select the header
- Ask Cascade to `Change the color of the header to green`

### Deploys

App Deploys allows you to quickly deploy your web applications to a public URL for sharing and testing. This feature streamlines the deployment process directly from your development environment.

#### Getting Started

To deploy your application, simply ask Cascade:

```
"Deploy this project to Netlify"
"Update my deployment"
```

#### Core Functionality

#### Deployment Process

When you use App Deploys, Cascade will:

1. Analyze your project to determine the appropriate framework
2. Securely upload your project files to our server
3. Create the deployment on the provider's platform
4. Provide you with a public URL and claim link

Your deployed site will be available at a public URL formatted as:

```
<SUBDOMAIN_NAME>.windsurf.build
```

#### Project Configuration

To facilitate redeployment, a `windsurf_deployment.yaml` file is created at the root of your project. This file contains essential information for future deployments, such as:

- Project ID
- Framework type
- Deployment settings

#### Claiming Your Deployment

After deploying, you'll receive a claim URL that allows you to:

- Transfer the project to your personal provider account
- Gain full control over the deployment
- Access provider-specific features
- Modify the domain name

**Note:** Unclaimed deployments may be deleted after a certain period. We recommend claiming important projects promptly.

#### Supported Frameworks

App Deploys works with most popular JavaScript frameworks, including:

- Next.js
- React
- Vue
- Svelte
- Static HTML/CSS/JS sites

#### Best Practices

- Only deploy code that you're comfortable sharing publicly
- Claim important deployments promptly to maintain control
- Use the configuration file for consistent redeployments
- Consider security implications when deploying applications with sensitive data

#### Security Considerations

**Warning:** Your code will be uploaded to our servers for deployment. We take several precautions to ensure security:

- File size limits and validation
- Rate limiting based on your account tier
- Secure handling of project files


