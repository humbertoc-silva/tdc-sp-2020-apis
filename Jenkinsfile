pipeline {
    agent any

    stages {
        stage('Validate') {
            steps {
                nodejs(nodeJSInstallationName: 'Node.js 12.18.3 (LTS)') {
                    sh 'spectral lint openapi.yaml'
                }
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                sh 'curl --form "specification=@openapi.yaml" https://tdc2020-demo.herokuapp.com/deploy'
            }
        }
    }
}