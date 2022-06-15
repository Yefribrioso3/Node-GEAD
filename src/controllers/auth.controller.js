import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../Model/User.js'
//const Role = require('../models/role.model')
//const { transporter } = require('../config/mailer')

export const login = async (req, res) => {
    const { email, password, LastLogin } = req.body

    try {
        const _user = await User.findOne({where: {email}, attributes: ['Id_Usuario', 'Name', 'LastName', 'email', 'roleId', 'password', 'Estado', 'LastLogin', 'Id_Location', 'Area'], include: { all: true, nested: true }})
        
        if (!_user) return res.status(404).json({msg: 'user not found'})

        const isMatch = await bcrypt.compare(password, _user.password)

        if (!isMatch) return res.status(400).json({msg: 'pass not match'})
        
        const token = await jwt.sign({id: _user.Id_Usuario, role: _user.roleId}, process.env.JWT_KEY, { expiresIn: '24h' })

        delete _user.dataValues.password

        const user = await User.findByPk(_user.Id_Usuario)

        await user.update( { //Tomamos solo los datos que deseamos actualizar
            LastLogin: LastLogin
        } );


        return res.status(200).json({data: _user, token})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const register = async (req, res) => {
    let { Name, LastName, email, password, roleId, Estado, LastLogin, Id_Location, Area } = req.body

    if (!Name || !LastName || !email || !password || !Estado || !Id_Location)
        return res.status(400).json({msg: 'all fields are required'})

    try {
        //const role = await Role.findByPk(roleId)

        //if(!role) return res.status(404).json({msg: `roleId ${roleId} not found`})

        let _user = await User.findOne({where: {email}})

        if (_user) {
            return res.status(400).json({ok: false, msg: 'email repeated'})
        }

        let hashed_pass = await bcrypt.hash(req.body.password, Number( process.env.BCRYPT ))

        _user = new User({
            Name,
            LastName, 
            email,
            roleId,
            password: hashed_pass,
            Estado,
            LastLogin,
            Id_Location,
            Area
        })

        await _user.save()

        const u = {
            name: _user.Name,
            lastName: _user.LastName, 
            email: _user.email,
            roleId: _user.roleId,
            Estado: _user.Estado,
            LastLogin: _user.LastLogin,
            Id_Location: _user.Id_Location,
            Area: _user.Area
        }

        return res.status(201).json({data: u})

    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}