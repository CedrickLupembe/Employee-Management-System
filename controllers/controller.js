const person = require('../model/model')

// Create employee
const CreateOne = async (req, res) => {

    let newEmployee = new person({

        name: req.body.name,
        lastname: req.body.lastname,
        gender: req.body.gender,
        role: req.body.role,
        department: req.body.department
    })

    try {

        const saveNew = await newEmployee.save()
        res.status(201).json(saveNew)
        console.log(saveNew);
        
    } catch (error) {
        res.status(400).json({message: error.message})
        console.log(error);
    }
}

// Get all employees
const GetAll = async (req, res) => {
    
    try {

        const AllEmplo = await person.find()
        res.status(200).json(AllEmplo)
        console.log(AllEmplo);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get one employee
const GetOne = async (req, res) => {

    try {

        const Data = await person.findById(req.params.id)
        res.json(Data)

    } catch (error) {
        res.status(500).json({message: error.message})
    } 

    res.json('hello')
}

// Update an employee
const UpdateOne = async (req, res) => {
    try {

        const id = req.params.id
        const DataUpdate = req.body
        const Options = {new : true}


        const result = await person.findByIdAndUpdate(
            id, DataUpdate, Options
        )

        res.json(result)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Delete an employee
const DeleteOne = async (req, res) => {
    try {

        const id = req.params.id

        const result = await person.findByIdAndDelete(id)
        res.send(`Document with this id ${result.id} was deleted in database`)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}



// Export all controllers functions

module.exports = {
    CreateOne,
    GetAll,
    GetOne,
    UpdateOne,
    DeleteOne
}