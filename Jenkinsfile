pipeline {
    agent any 
    
    stages {
        stage('Env') {
            steps {
                echo env.BUILD_ID
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
}