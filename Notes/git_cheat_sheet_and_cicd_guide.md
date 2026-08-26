# Git Cheat Sheet & CI/CD Guide

## Working with Snapshots & Git Staging Area

* **`git status`**: Show modified files in the working directory staged for your next commit.
* **`git add [file]`**: Add a file as it looks now to your next commit stage.
* **`git reset [file]`**: Unstage a file while retaining the changes in your working directory.
* **`git diff`**: Show differences of what is changed but not staged.
* **`git diff --staged`**: Show differences of what is staged but not yet committed.
* **`git commit -m "[descriptive message]"`**: Commit staged changes with a descriptive message.

---

## Branching & Merging

Isolate work in branches, change context, and integrate changes seamlessly.

* **`git branch`**: List all local branches (an asterisk `*` will appear next to the currently active branch).
* **`git branch [branch-name]`**: Create a new branch at the current commit.
* **`git checkout [branch-name]`**: Switch to another branch and check it out into your working directory.
* **`git merge [branch-name]`**: Merge the specified branch's history into the current active branch.
* **`git log`**: Show all commits in the current branch's history.

---

## Inspecting & Comparing

Examine logs, diffs, and object information.

* **`git log`**: Show the commit history of the currently active branch.
* **`git log branch-b..branch-a`**: Show the commits on `branch-a` that are not on `branch-b`.
* **`git log --follow [file]`**: Show the commits that changed `file`, even across renames.
* **`git diff branch-b..branch-a`**: Show the diff of changes in `branch-a` that are not in `branch-b`.
* **`git show [SHA]`**: Show any object in Git in a human-readable format.

---

## Share & Update

Retrieve updates from another repository and update your local repository.

* **`git remote add [alias] [url]`**: Add a Git URL as a named alias.
* **`git fetch [alias]`**: Fetch down all branches from that remote.
* **`git merge [alias]/[branch]`**: Merge a remote branch into your current branch to bring it up to date.
* **`git push [alias] [branch]`**: Transmit local branch commits to the remote repository branch.
* **`git pull`**: Fetch and merge any commits from the tracking remote branch.

---

## Tracking Path Changes

Version control file removals and path changes.

* **`git rm [file]`**: Delete the file from the project and stage the removal for commit.
* **`git mv [existing-path] [new-path]`**: Move or rename a file and stage the change.
* **`git log --stat -M`**: Show all commit logs with indications of any moved or renamed paths.

---

## Rewriting History

Rewrite branches, update commits, and clear history.

* **`git rebase [branch]`**: Apply any commits of the current branch ahead of the specified branch.
* **`git reset --hard [commit]`**: Clear the staging area and rewrite the working tree back to the specified commit.

---

## Ignoring Patterns

Prevent unintentional staging or committing of temporary files.

* **`git config --global core.excludesfile [file]`**: Configure a global ignore pattern file for all repositories.

---

## Temporary Stashes

Temporarily store modified, tracked files to work on a different branch without committing.

* **`git stash`**: Save modified and staged changes safely.
* **`git stash list`**: List stored stashes in chronological order.
* **`git stash pop`**: Apply the most recent stash and remove it from the stash list.

---

## CI/CD Integration

### How does CI/CD work with Git?

Every time code is pushed to a Git repository configured with CI/CD services (such as **GitHub Actions**, **GitLab CI/CD**, etc.), the pipeline automatically:

1. **Runs tests** to verify code quality and functionality.
2. **Builds** your application binaries or containers.
3. **Deploys** the application automatically to target environments.

If any stage fails, the team is notified immediately so issues can be resolved quickly.

### Manual Workflow vs. Automated CI/CD

| Stage | Manual Workflow (Before CI/CD) | Automated Pipeline (After CI/CD) |
| :--- | :--- | :--- |
| **Source Code Compilation** | Developer compiles locally on their machine. | Automatically triggered on code push. |
| **Dependencies** | Manually downloaded and resolved. | Package managers automatically fetch dependencies during build. |
| **Artifact Packaging** | Manual archiving, zipping, or container creation. | Continuous Integration automatically packages artifacts. |
| **Deployment** | Manual file transfers (FTP/SSH) to server. | Continuous Deployment automatically deploys to servers or cloud providers. |