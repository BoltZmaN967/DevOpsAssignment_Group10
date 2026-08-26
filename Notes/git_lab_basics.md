stages:
  - test
  - build
  - deploy

run_tests:
  stage: test
  script:
    - echo "Running automated unit tests..."
    - npm test

build_app:
  stage: build
  script:
    - echo "Building application package..."
    - npm run build
  artifacts:
    paths:
      - dist/

deploy_staging:
  stage: deploy
  script:
    - echo "Deploying to staging environment..."
  only:
    - main