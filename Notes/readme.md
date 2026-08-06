# UNIT - 3 (CI)

# Q | how does CI/CD work with git?
Ans | - Everytime code is pushed to the git repository that contain the work CI/CD services like github actions . gitlab Ci
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
1) It is a open source automation server that automates software development tasks such as building , testing and deploying 
2) It act as the control automation tool in a CI pipeline 

# Q | why jenkins used?
Ans | automatically detect code changes and build the application
    | run automated tests 
    | generate reports 
    | deploy appplications 
    | send notification if build fails
    | integrate with git github , maven , docker , kubernetes and cloud platforms.

# Advantages:
- it is free and open source.
- 1000s of plugins.
- platform independence.
- easy integration with devops.
- support CI / CD pipelines.

# github webhooks in jenkins :
- github webhooks is a machinism that automatically informs jenkins whenever a change occurs in a github repository.
- instead of jenkins repeateadly checking github for updates , github sends an http request (webhook) to jenkins immediately after events such as push.

# jenkins workflow:
1) developers commit code
2) developers push code to github
3) github sends a webhook notification to jenkins
4) jenkins starts a CI / CD pipline automatically 