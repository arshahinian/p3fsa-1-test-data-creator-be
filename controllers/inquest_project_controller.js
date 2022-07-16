// DEPENDENCIES
const inquestProject = require('express').Router()
const db = require('../models')
const { Inquest  } = db
const { Op } = require('sequelize')

// FIND ALL INQUEST PROJECTS
inquestProject.get('/', async (req, res) => {
    try {
        const foundItem = await Inquest.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// FIND A SPECIFIC INQUEST PROJECT
inquestProject.get('/:inquest_name', async (req, res) => {
    try {
        var inquest_name = req.params.inquest_name ? req.params.inquest_name : '';
        console.log( `%${inquest_name}%`)
        const foundItem = await Inquest.findOne({
            where: 
                { 
                    inquest_name: { [Op.like]: `%${inquest_name}%` }
                }            
        })
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AN INQUEST PROJECT
inquestProject.post('/', async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        const newItem = await Inquest.create(req.body)
        res.status(200).json({
            message: 'The new inquest project was created, successfully!',
            data: newItem
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE AN INQUEST PROJECT
inquestProject.put('/:inquest_id', async (req, res) => {
    try {
        const updatedItem = await Inquest.update(req.body, {
            where: {
                inquest_id: req.params.inquest_id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedItem} inquest project!`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE AN INQUEST PROJECT
inquestProject.delete('/:inquest_id', async (req, res) => {
    try {
        const deletedItem = await Inquest.destroy({
            where:
                {
                    inquest_id: req.params.inquest_id
                }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedItem} inquest project!`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = inquestProject
