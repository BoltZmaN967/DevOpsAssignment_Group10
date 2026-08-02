### git cheatsheet:

## installation guide:
1) windows:
2) mac:
3) git for all:

## git commands:

# setup : configuring user information used across all local repository:
1) git config --global userusername "[first-and-last-name]" : set a name that is identifiable for credit when review version history.
2) git config --global user email "[valid-email]": set an email address that will be associated with each history maker.
3) git config --global color-ui auto : set automatic command line config git for easy reviewing.

# setup and init: configuring user information initially and cloning repositories
1) git init: configuring user information 


1) git status : show modified files 

3) git reset [file] : unstage a file while retaining the changes in working directory
4) git diff : diff of what is changed but not staged
5) git diff --stage : diff of what is changed but not yet committed
6) git commit -m "[descriptive message]": commit the code to the respective branch with a message.

# branch and merge: isolating work in branches , changing cintext and integrate changes
1) git branch : list your branches + will appear next to the currently active branch.
2) git branch [branch-name] : create new branch at the current commit.
3) git checkout [branch-name] : swith to another branch branch and check it out into your working directory.
4) git merge [branch-name] : merge the specified branch's history into the current one.
5) git log : show all commits in the current branch's history.

# Inspect and compare : examine logs , diffs and object information 
1) git log: same as above
2) git log branchB ... branchA : show the commits on branchA that are not on branchB.
3) git log --follow [file] : show the commits that changed file , even across renames.
4) git branchB ... branchA: show the diff of what is in branchB that is not in branchB.
5) git show [SHA] : show any object in git in human-readable format.

# 








-------------------------------------------College material complete--------------------------------------

--------------------------------------------Out of Syllabus content---------------------------------------

