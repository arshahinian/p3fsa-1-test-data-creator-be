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

  function createArtifactRecord(reqBody,artifactType,id)
  {
    try{
               
        let artName = reqBody.inquest_name
        let artType = artifactType
        let artValue = reqBody.inquest_desc
        let artCode = reqBody.inquest_note
        let currentDateText = getCurrentDateText()
        let artJson = {artifact_name:artName
        ,artifact_type:artType
        ,artifact_value:artValue
        ,artifact_code: artCode
        ,modified_date: currentDateText
        ,inquest_id: id
        }
        console.log(artJson)
        return artJson
    }
    catch(error)
    {
        console.log(error)
        return null
    } 
    
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
        const newItem = await Inquest.create(reqBody)
        let inquestId = newItem.dataValues.inquest_id
        console.log(newItem)
        console.log('artJson')
        console.log(inquestId)
        let artJson = createArtifactRecord(reqBody,'INQUEST_CREATE',inquestId)
        console.log(artJson)
        if(artJson)
        {
            const newArtifact = await Artifact.create(artJson)
            console.log(newArtifact)
        }   

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
        const reqBody = req.body;
        let inquestId = req.params.inquest_id
        console.log(inquestId)
        const updatedItem = await Inquest.update(reqBody, {
            where: {
                inquest_id: inquestId
            }
        })        
        console.log(updatedItem)
        console.log('artJson')
        
        let artJson = createArtifactRecord(reqBody,'INQUEST_UPDATE',inquestId)
        console.log(artJson)
        if(artJson)
        {
            const newArtifact = await Artifact.create(artJson)
            console.log(newArtifact)
        }   

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
