pipeline {
    agent any

    stages {
        stage('customers') {
            when {
                changeset "**/customers/*.*"
            }
            stages {
                stage('Check') {
                    steps {
                        echo 'Check'
                    }
                }
                stage('Test') {
                    steps {
                        echo 'Test'
                    }
                }
                stage('Coverage') {
                    steps {
                        echo 'Coverage'
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

        stage('products') {
            when {
                changeset "**/products/*.*"
            }
            stages {
                stage('Check') {
                    steps {
                        echo 'Check'
                    }
                }
                stage('Test') {
                    steps {
                        echo 'Test'
                    }
                }
                stage('Coverage') {
                    steps {
                        echo 'Coverage'
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
    }
}