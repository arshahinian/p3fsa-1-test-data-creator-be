// DEPENDENCIES
const inquestProject = require('express').Router()
const db = require('../models')
const { Inquest, Artifact } = db
const { Op } = require('sequelize')

function getCurrentDateText()
  {
      let today = new Date();
      let year = parseInt(today.getFullYear());
      let month = parseInt(today.getMonth()+ 1);
      let day = parseInt(today.getDate());
      let yearText = padZero(year);
      let monthText = padZero(month);
      let dayText = padZero(day);
      let hour = parseInt(today.getHours());
      let minute = parseInt(today.getMinutes());
      let second = parseInt(today.getSeconds());
      let hourText = padZero(hour);
      let minuteText = padZero(minute);
      let secondText = padZero(second);
      let value = `${monthText}/${dayText}/${yearText} ${hourText}:${minuteText}:${secondText}`
      return value;
  }

  function padZero(value)
  {
      if(parseInt(value) > 9)
      {
          return value.toString();
      }
      else
      {
          return `0${value.toString()}`.toString()
      }    
  }

  function createArtifactRecord(reqBody,artifactType)
  {
    const obj = JSON.parse(reqBody);
    console.log(obj)
    let artName = obj.inquest_name
    let artType = artifactType
    let artValue = obj.inquest_desc
    let artCode = obj.inquest_note
    let artNameChunk = `artifact_name:${artName}`
    let artTypeChunk = `artifact_type:${artType}`
    let artValueChunk = `artifact_value:${artValue}`
    let artCodeChunk = `artifact_code:${artCode}`
    let modifiedDateChunk = `modified_date:${getCurrentDateText()}`
    let inquestIdChunk = `inquest_id:${req.params.inquest_id}`
    let artJson = `{${artNameChunk},${artTypeChunk},${artValueChunk},${artCodeChunk},${modifiedDateChunk},${inquestIdChunk}}`
    console.log(artJson)
    return artJson
  }

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
        console.log('artJson')
        let artJson = createArtifactRecord(req.body,'INQUEST_CREATE')
        console.log(artJson)
        const newArtifact = await Artifact.create(artJson)

        res.status(200).json({
            message: `The new inquest project was created, successfully! New artifact ${newArtifact}!`
            ,data: newItem
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
        console.log('artJson')
        let artJson = createArtifactRecord(req.body,'INQUEST_UPDATE')
        console.log(artJson)
        const newArtifact = await Artifact.create(artJson)

        res.status(200).json({
            message: `Successfully updated ${updatedItem} inquest project! New artifact ${newArtifact}!`
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
