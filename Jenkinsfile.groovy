pipeline {
    agent any
    stages {
        stage('Check HTML & JS Quality') {
            steps {
                bat '"C:\\Program Files\\Git\\bin\\bash.exe" -c "npm install -g htmlint eslint"'
                bat '"C:\\Program Files\\Git\\bin\\bash.exe" -c "htmlint index.html"'
                bat '"C:\\Program Files\\Git\\bin\\bash.exe" -c "eslint js/script.js --fix"'
            }
        }
    }
}