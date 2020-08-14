pipeline {
    agent any

    environment {
        IGNORE_FILES = """${sh(returnStdout: true, script: 'ls -p | grep -v /')}"""
        CHANGED_POLICIES = """${sh(returnStdout: true, script: "git diff --name-only HEAD~1 | sort -u | awk 'BEGIN {FS="/"} {print $1}'")}"""
    }

    stages {
        stage('Validate') {
            steps {
                nodejs(nodeJSInstallationName: 'Node.js 12.18.3 (LTS)') {
                    sh '''
                        for policy in $CHANGED_POLICIES
                        do
                            if ! [[ " ${IGNORE_FILES[@]} " =~ "$policy" ]]; then
                                cd "$policy"
                                spectral lint openapi.json
                                cd ..
                            fi
                        done
                    '''
                }
            }
        }
        // stage('Deploy') {
        //     when {
        //         branch 'master'
        //     }
        //     steps {
        //         echo 'Deploy'
        //     }
        // }
    }
}