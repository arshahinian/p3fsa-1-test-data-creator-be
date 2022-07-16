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
        const foundItem = await Artifact.findOne({
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

// CREATE AN INQUEST ARTIFACT
inquestArtifact.post('/', async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        const newItem = await Artifact.create(req.body)
        res.status(200).json({
            message: 'The new inquest artifact was created, successfully!',
            data: newItem
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE AN INQUEST ARTIFACT
inquestArtifact.put('/:artifact_id', async (req, res) => {
    try {
        const updatedItem = await Artifact.update(req.body, {
            where: {
                artifact_id: req.params.artifact_id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedItem} inquest artifact!`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE AN INQUEST ARTIFACT
inquestArtifact.delete('/:artifact_id', async (req, res) => {
    try {
        const deletedItem = await Artifact.destroy({
            where:
                {
                    artifact_id: req.params.artifact_id
                }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedItem} inquest artifact!`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = inquestArtifact
