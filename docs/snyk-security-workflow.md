# Snyk Security Scan and Automated Resolution Workflow

This GitHub Action workflow provides automated security scanning using Snyk CLI and integrates with Devin AI for intelligent vulnerability resolution.

## Overview

The workflow performs the following actions:
1. **Security Scanning**: Runs Snyk vulnerability and code security scans
2. **High-Severity Detection**: Identifies and filters high-severity findings
3. **AI-Powered Resolution**: Creates Devin AI sessions for automated vulnerability analysis and remediation
4. **Issue Tracking**: Automatically creates GitHub issues for security findings
5. **Artifact Storage**: Saves scan results for review and audit purposes

## Triggers

The workflow runs on:
- **Push events** to `main` and `develop` branches
- **Pull request events** targeting `main` and `develop` branches  
- **Scheduled runs** daily at 2 AM UTC
- **Manual dispatch** via GitHub Actions UI

## Prerequisites

### Required Secrets

Configure these secrets in your GitHub repository settings:

1. **`SNYK_TOKEN`**: Your Snyk authentication token
   - Sign up at [snyk.io](https://snyk.io)
   - Generate an API token from your account settings
   - Add as repository secret

2. **`DEVIN_API_KEY`**: Your Devin AI API key
   - Obtain from Devin AI platform
   - Add as repository secret

### Required Permissions

The workflow requires these GitHub permissions:
- `contents: read` - To checkout repository code
- `security-events: write` - To write security scan results
- `pull-requests: write` - To comment on pull requests
- `issues: write` - To create security tracking issues

## Supported Project Types

The workflow automatically detects and handles:
- **Node.js projects** (package.json)
- **Python projects** (requirements.txt)
- **Ruby projects** (Gemfile)

## Workflow Steps

### 1. Code Checkout and Setup
- Checks out repository with full history
- Sets up Node.js environment
- Installs project dependencies

### 2. Snyk CLI Installation and Authentication
- Installs latest Snyk CLI globally
- Authenticates using provided token

### 3. Security Scanning
- **Vulnerability Scan**: Checks dependencies for known vulnerabilities
- **Code Security Scan**: Performs static analysis for security issues
- Filters results to high-severity findings only

### 4. Results Processing
- Parses scan outputs in JSON format
- Extracts high-severity vulnerabilities and code issues
- Generates human-readable summary

### 5. Devin AI Integration
- Creates detailed security resolution session
- Provides comprehensive context about findings
- Includes remediation guidelines and best practices

### 6. Issue Creation and Tracking
- Automatically creates GitHub issues for security findings
- Includes scan details, findings summary, and Devin session links
- Labels issues appropriately for triage

### 7. Artifact Storage
- Uploads scan results as workflow artifacts
- Retains results for 30 days for audit purposes

## Devin AI Security Resolver

When high-severity findings are detected, the workflow creates a Devin AI session with:

### Capabilities
- **Vulnerability Analysis**: Deep analysis of security findings
- **Remediation Planning**: Comprehensive fix strategies
- **Code Review**: Security-focused code examination
- **Best Practices**: Implementation of security standards

### Guidelines
- Prioritizes high and critical severity issues
- Provides actionable remediation steps
- Includes before/after code examples
- Considers impact on application functionality
- Suggests additional security measures

### Safety Features
- Read-only repository access
- No automatic commits or pushes
- Pre-push hooks prevent unauthorized changes
- Comprehensive logging and audit trails

## Output and Results

### Workflow Outputs
- **Session ID**: Devin AI session identifier
- **Session URL**: Direct link to resolution session
- **Findings Count**: Number of high-severity issues detected

### Artifacts
- **Scan Results**: Raw Snyk output files
- **Findings Summary**: Processed vulnerability details
- **Remediation Report**: Devin AI analysis and recommendations

### GitHub Integration
- **Security Issues**: Automatically created for tracking
- **Pull Request Comments**: Security feedback on code changes
- **Status Checks**: Pass/fail based on security findings

## Configuration Options

### Severity Thresholds
Currently configured for high-severity findings. Modify these lines to adjust:
```yaml
snyk test --json --severity-threshold=high
snyk code test --json --severity-threshold=high
```

### Scan Frequency
Modify the cron schedule to change automated scan timing:
```yaml
schedule:
  - cron: '0 2 * * *'  # Daily at 2 AM UTC
```

### Supported Severities
- `low`: Low severity issues
- `medium`: Medium severity issues  
- `high`: High severity issues
- `critical`: Critical severity issues

## Troubleshooting

### Common Issues

1. **Snyk Authentication Failure**
   - Verify `SNYK_TOKEN` is correctly set
   - Check token has appropriate permissions
   - Ensure token hasn't expired

2. **Devin API Connection Issues**
   - Verify `DEVIN_API_KEY` is correctly configured
   - Check API endpoint availability
   - Review network connectivity

3. **No Dependencies Found**
   - Ensure package files exist (package.json, requirements.txt, etc.)
   - Check file paths and naming
   - Verify dependencies are properly declared

### Debug Information

The workflow provides detailed logging for troubleshooting:
- Scan execution details
- Finding counts and summaries
- API response information
- Error messages and stack traces

## Security Considerations

### Data Privacy
- Scan results may contain sensitive information
- Results are stored as GitHub artifacts with 30-day retention
- Devin AI sessions include repository context

### Access Control
- Workflow requires appropriate repository permissions
- API keys should be stored as encrypted secrets
- Regular rotation of authentication tokens recommended

### Compliance
- Scan results provide audit trail for security compliance
- Automated issue creation ensures tracking and accountability
- Integration with existing security workflows and tools

## Best Practices

1. **Regular Scanning**: Enable scheduled scans for continuous monitoring
2. **Prompt Resolution**: Address high-severity findings quickly
3. **Review Sessions**: Monitor Devin AI sessions for quality and accuracy
4. **Update Dependencies**: Keep security tools and dependencies current
5. **Team Training**: Ensure team understands security workflow and processes

## Support and Maintenance

- **Workflow Updates**: Regularly update action versions and dependencies
- **Security Patches**: Apply security updates to scanning tools
- **Performance Monitoring**: Track scan execution times and success rates
- **Feedback Integration**: Incorporate team feedback for workflow improvements
