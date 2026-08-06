# UNIT - 3 (CI)

Q) how does CI/CD work with git?
- Everytime code is pushed to the git repository that contain the work CI/CD services like github actions . gitlab Ci
- it runs tests , build your project and can deploy automatically 
- if sometimes it fails then you will get notified immediately 

![Image](Images/photo1.png)
![Image](Images/photo2.png)


1) jenekins : is an open source automation server with large plugin library
2) Github actions: build into github , uses YAML files (.github/workflows/)
3) Gitlab CI/CD : build into gitlab , used (.gitlab -ci yml)
4) CircleCI : works with github / gitlab , easy setup for many languages.
5) TrackCI : popular for open source uses 
6) azure pipline: work with azure devops and , github support many platforms

# Note : core functionality of CI/CD tools are : triger build , run test , provide feedback


# Q | a student accidentally important source code after multiple commits , explan how git helps recover previous version
# Q | developers working in startup on login cart and payment module explain complete git workflow using branch commit , push and merge

# Key CI/CD: concepts:
1) workflow : a series of jobs that run together
2) jobs / tasks : a group of steps that run together to perform a specific task
3) steps : a single tasks checking out a code and test
4) runner : a computer and server that runs your block
5) trigger : decides when your workflow runs / execute 
6) EV : settings for your workflows
7) secerets : APIs secret

# Jenkins:
1) 