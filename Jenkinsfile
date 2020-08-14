pipeline {
    agent any

    stages {
        stage('Validate') {
            steps {
                sh 'spectral lint openapi.json'
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploy'
            }
        }
    }
}