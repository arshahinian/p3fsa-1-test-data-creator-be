// DEPENDENCIES
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    return app;
};
app.use(cors())

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Starting Araz Test Data Creator API...'
    })
})

// CONTROLLERS
const userHandleControllerPath = './controllers/user_handle_controller'
const userHandleController = require(userHandleControllerPath)
app.use('/handles', userHandleController)

const inquestProjectControllerPath = './controllers/inquest_project_controller'
const inquestProjectController = require(inquestProjectControllerPath)
app.use('/inquests', inquestProjectController)

const inquestArtifactControllerPath = './controllers/inquest_artifact_controller'
const inquestArtifactController = require(inquestArtifactControllerPath)
app.use('/artifacts', inquestArtifactController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`:o> running on port: ${process.env.PORT}`)
})