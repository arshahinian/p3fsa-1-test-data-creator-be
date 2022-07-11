// DEPENDENCIES
const userHandle = require('express').Router()
const db = require('../models')
const { Handle } = db
const { Op } = require('sequelize')

// FIND ALL USER HANDLES
userHandle.get('/', async (req, res) => {
    try {
        const foundItem = await Handle.findAll()
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
  })

// FIND A SPECIFIC USER HANDLE
userHandle.get('/:handle_name', async (req, res) => {
    try {
        var handle_name = req.params.handle_name ? req.params.handle_name : '';
        console.log( `%${handle_name}%`)
        const foundItem = await Handle.findOne({
            where: 
                { 
                    handle_name: { [Op.like]: `%${handle_name}%` }
                }            
        })
        res.status(200).json(foundItem)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A USER HANDLE
userHandle.post('/', async (req, res) => {
    try {
        console.log('Pop Rocks');
        const reqBody = req.body;
        console.log(reqBody);
        const newItem = await Handle.create(reqBody)
        res.status(200).json({
            message: 'The new user handle was created, successfully!',
            data: newItem
        })
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// UPDATE A USER HANDLE
userHandle.put('/:handle_id', async (req, res) => {
    try {
        const updatedItem = await Handle.update(req.body, {
            where: {
                handle_id: req.params.handle_id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedItem} user handle!`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A USER HANDLE
userHandle.delete('/:handle_id', async (req, res) => {
    try {
        const deletedItem = await Handle.destroy({
            where:
                {
                    handle_id: req.params.handle_id
                }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedItem} user handle!`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = userHandle
