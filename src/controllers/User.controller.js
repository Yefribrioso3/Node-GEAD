import User from '../Model/User.js'

// const User = require('../models/user.model')
// const Project = require('../models/project.model')
// const Supplier = require('../models/supplier.model')
// const EngArea = require('../models/engarea.model')

// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

export const getAllUsers = async (req, res) => {
    try {
        // const users = await User.findAll({ include: [{ model: Project, as: 'projects'}, { model: Supplier, as: 'supplier'}, { model: EngArea, as: 'areas'}], attributes: ['id', 'name', 'lastName', 'email', 'status'] })
        const users = await User.findAll({ where: { Estado : true}, attributes: ['Id_Usuario', 'Name', 'LastName', 'email', 'roleId', 'Estado', 'LastLogin', 'Id_Location'], 
        include: { all: true, nested: true } })
        
        // const equipment = await Equipment.findAll({ where: { Estado : true} ,include: { all: true, nested: true } })

        return res.status(200).json({data: users})
    } catch (error) {
        // console.log(error)
        return res.status(500).json(error)
    }
}

export const getUserByToken = async (req, res) => {
    try {   
                
        const email = req.user.dataValues.email;

        const _user = await User.findOne({where: {email}, attributes: ['Id_Usuario', 'Name', 'LastName', 'email', 'roleId', 'Estado', 'password', 'LastLogin', 'Id_Location'], include: { all: true, nested: true }})
        
        const { password, ...rest } = _user.dataValues
 
        return res.status(200).json({data: rest})
    } catch (error) {
        // console.log(error)
        return res.status(500).json(error)
    }
}

export const getUserById = async (req, res) => {

    const { id } = req.params

    try {
        const user = await User.findByPk(id)

        const { password, ...rest } = user.dataValues

        return res.status(200).json({data: rest})
    } catch (error) {
        // console.log(error)
        return res.status(500).json(error)
    }
}

export const assignProjectsToUser = async (req, res) => {

    const { userId } = req.params
    const { data } = req.body
    let dataAdd = data.map(x => x.selected && x.id).filter(x => x !== false)
    let dataRemove = data.map(x => !x.selected && x.id).filter(x => x !== false)

    try {
        const user = await User.findByPk(userId)

        //const project = await Project.findByPk(projectId)

        if (dataAdd) {
            await user.addProject(dataAdd)
        }

        if (dataRemove) {
            await user.removeProject(dataRemove)
        }

        const { password, ...rest } = user.dataValues

        return res.status(200).json({data: rest})
    } catch (error) {
        // console.log(error)
        return res.status(500).json(error)
    }
}

export const updateUser = async (req, res) => {
 
    const { id: idUser } = req.params
    const { id, password,...rest } = req.body

    try {
        const user = await User.findByPk(idUser)

        if(!user) return res.status(404).json({msg: 'user not found'})

        const users = await User.findAll()

        let w = users.filter(x => x.dataValues.email !== user.dataValues.email)

        const emailRepited = w.find(x => x.dataValues.email === req.body.email)

        if (emailRepited)
            return res.status(400).json({msg: 'email repited'})

        await user.update(rest)
        // await user.setProjects(rest.projects.map(x => x.id))
        // await user.setAreas(rest.areas.map(x => x.id))

        return res.status(200).json({data: user})
    } catch (error) {
        // console.log(error)
        return res.status(500).json(error)
    }
}