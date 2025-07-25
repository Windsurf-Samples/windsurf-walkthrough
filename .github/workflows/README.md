# Dependabot Alert Remediation Workflow

This GitHub Actions workflow automatically triggers a Devin AI session when a Dependabot alert is dismissed in your repository.

## How It Works

1. When a Dependabot alert is dismissed, GitHub triggers the workflow
2. The workflow extracts relevant information from the alert (ID, package name, severity, summary)
3. It sends a request to the Devin API to create a new session focused on remediating the specific vulnerability
4. Devin will analyze and fix the vulnerability in your codebase

## Setup Instructions

### 1. Add Devin API Key to GitHub Secrets

You need to add your Devin API key as a repository secret:

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Click "New repository secret"
4. Name: `DEVIN_API_KEY`
5. Value: Your Devin API key (starts with `devin_`)
6. Click "Add secret"

### 2. Customize the Task Description (Optional)

You can modify the task description in the workflow file to provide more specific instructions to Devin:

```yaml
JSON_PAYLOAD=$(cat << EOF
{
  "task": "Remediate Dependabot alert for package $ALERT_PACKAGE: $ALERT_SUMMARY",
  "repository": {
    "url": "${{ github.server_url }}/${{ github.repository }}",
    "branch": "${{ github.ref_name }}"
  }
}
EOF
)
```

## Troubleshooting

- Check GitHub Actions logs for any errors in the API request
- Verify your Devin API key is correctly formatted and valid
- Ensure your repository is accessible to Devin (public or with proper permissions)

## API Reference

For more details about the Devin API, see the [official documentation](https://docs.devin.ai/api-reference/sessions/create-a-new-devin-session).
