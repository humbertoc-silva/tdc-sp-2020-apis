pipeline {
    agent any

    environment {
        EXTERNAL = 'EXTERNAL'
    }
    
    stages {
        stage('Params') {
            steps {
                echo "${params.Greeting} World!"
            }
        }
        stage('Env') {
            environment {
                INTERNAL = 'INTERNAL'
            }

            steps {
                echo "EXTERNAL: ${env.EXTERNAL}"
                echo "INTERNAL: ${env.INTERNAL}"
                echo "BUILD_ID: ${env.BUILD_ID}"
                echo "BUILD_NUMBER: ${env.BUILD_NUMBER}"
                echo "BUILD_TAG: ${env.BUILD_TAG}"
                echo "BUILD_URL: ${env.BUILD_URL}"
                echo "BUILD_DISPLAY_NAME: ${env.BUILD_DISPLAY_NAME}"
                echo "EXECUTOR_NUMBER: ${env.EXECUTOR_NUMBER}"
                echo "JAVA_HOME: ${env.JAVA_HOME}"
                echo "JENKINS_URL: ${env.JENKINS_URL}"
                echo "JENKINS_HOME: ${env.JENKINS_HOME}"
                echo "JOB_NAME: ${env.JOB_NAME}"
                echo "JOB_BASE_NAME: ${env.JOB_BASE_NAME}"
                echo "JOB_URL: ${env.JOB_URL}"
                echo "NODE_NAME: ${env.NODE_NAME}"
                echo "NODE_LABELS: ${env.NODE_LABELS}"
                echo "WORKSPACE: ${env.WORKSPACE}"
                echo "WORKSPACE_TMP: ${env.WORKSPACE_TMP}"
                echo "BRANCH_NAME: ${env.BRANCH_NAME}"
                echo "CHANGE_ID: ${env.CHANGE_ID}"
                echo "CHANGE_URL: ${env.CHANGE_URL}"
                echo "CHANGE_TITLE: ${env.CHANGE_TITLE}"
                echo "CHANGE_AUTHOR: ${env.CHANGE_AUTHOR}"
                echo "CHANGE_AUTHOR_DISPLAY_NAME: ${env.CHANGE_AUTHOR_DISPLAY_NAME}"
                echo "CHANGE_AUTHOR_EMAIL: ${env.CHANGE_AUTHOR_EMAIL}"
                echo "CHANGE_TARGET: ${env.CHANGE_TARGET}"
                echo "CHANGE_BRANCH: ${env.CHANGE_BRANCH}"
                echo "CHANGE_FORK: ${env.CHANGE_FORK}"
                echo "TAG_NAME: ${env.TAG_NAME}"
                echo "TAG_TIMESTAMP: ${env.TAG_TIMESTAMP}"
                echo "TAG_UNIXTIME: ${env.TAG_UNIXTIME}"
                echo "TAG_DATE: ${env.TAG_DATE}"
            }
        }
        stage('Build') {
            steps {
                echo 'Building...' 
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }

    post {
        success {
            echo "Pipeline succeeded"
        }
    }
}