pipeline {
    agent any

    stages {
        stage('Validate') {
            steps {
                nodejs(nodeJSInstallationName: 'Node.js 12.18.3 (LTS)') {
                    sh 'spectral lint openapi.json'
                }
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