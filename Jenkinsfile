pipeline {
    agent any

    stages {
        stage('Validate') {
            steps {
                echo 'Validating...'
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploying...'
            }
        }
    }
}