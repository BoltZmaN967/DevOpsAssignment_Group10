# Git Repository Information Commands

Depending on what exactly you want to know about your Git repository, you will use different commands. Here is a quick reference guide grouped by the type of information you need.

## 1. View Remote Repository Details (Where it is hosted)
* **`git remote -v`** – Shows the URLs of the remote repositories connected to your local project.
* **`git remote show origin`** – Provides a detailed breakdown of the remote repository, including tracked branches and up-to-date statuses.

## 2. Check the Current State of the Repo
* **`git status`** – Shows the current branch, any untracked or modified files, and what is staged for the next commit.
* **`git branch -a`** – Lists all branches in the repository (both local and remote).

## 3. See the History of the Repo
* **`git log`** – Shows the commit history for the repository.
* **`git log --oneline --graph`** – Gives a clean, visual map of the repository's history and branches.

## 4. Advanced: Built-in Repo Summary
* **`git repo info`** – A newer, experimental command available in recent Git versions that explicitly retrieves overall configuration and structural summaries of the repository.
