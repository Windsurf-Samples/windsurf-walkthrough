---
description: This is a common workflow for immediately preceding a git commit. It builds and stages changes
---

The changes currently active must correctly build in the frontend directory before committing into the code base.

Follow these steps:
1. run `npm run build`
2. See if the build succeeds
 - If the build fails, research why the build failed and begin to suggest fixes. Reason over the easiest path to remediation. Cease the workflow here
 - If the build succeeds, determine the contents of the changes that are not yet committed
3. Stage the changes with `git add ...`
4. Derive a meaningful git commit message. Use git commit best practices and your understanding of the now staged changes that are ready to commit. Inform the user what your git message would be, but do not perform the `git commit` command yourself