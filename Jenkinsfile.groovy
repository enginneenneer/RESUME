pipeline {
        agent any
        stages {
                stage('Check HTML & JS Quality') {
                        sh 'npm install -g htmlint eslint'
                        sh 'htmlint index.html'
                        sh 'eslint js/script.js --fix' 
                }
        }
}
