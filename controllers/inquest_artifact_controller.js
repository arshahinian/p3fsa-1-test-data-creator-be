// DEPENDENCIES
const inquestArtifact = require('express').Router()
const db = require('../models')
const { Artifact  } = db
const { Op } = require('sequelize')

// FIND ALL INQUEST ARTIFACTS
inquestArtifact.get('/', async (req, res) => {
    try {
        const foundItem = await Artifact.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// FIND A SPECIFIC INQUEST ARTIFACT
inquestArtifact.get('/:artifact_name', async (req, res) => {
    try {
        var artifact_name = req.params.artifact_name ? req.params.artifact_name : '';
        console.log( `%${artifact_name}%`)
        const foundItem = await Artifact.findAll({
            where: 
                { 
                    artifact_name: { [Op.like]: `%${artifact_name}%` }
                }            
        })
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
})

// EXPORT
module.exports = inquestArtifact
