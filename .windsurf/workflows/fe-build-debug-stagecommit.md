---
description: This is a common workflow for immediately preceding a git commit. It builds and stages changes
---

The changes currently active must correctly build in the frontend directory before committing into the code base.

Follow these steps:
1. run an `npm run build`
2a. If the build fails, research why the build failed and begin to suggest fixes. Reason over the easiest path to remediation. Cease the workflow here
3. If the build succeeds, research what changes are unstaged and the contents of those changes
4. Stage the changes
5. propose a meaningful git commit message. Use git commit best practices to convey your understanding of the staged changes that are ready to commit