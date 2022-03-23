import jwt from 'jsonwebtoken'
import User from '../Model/User.js'

export const authMdlw = async (req, res, next) => {
    try {
        if (!req.headers.authorization)
            return res.status(401).json({msg: 'unauthorized'})

        const token = await req.headers.authorization.split(' ')[1] || req.headers.authorization
        //token verify
        let decode = ''
        try {        
            decode = await jwt.verify(token, process.env.JWT_KEY || 'secretKey')
        } catch (error) {
            return res.status(401).json({error})
        }

        //token refresh (refresh expiration date)
        const tokenRefreshed = await jwt.sign({id: decode.id, role: decode.role}, process.env.JWT_KEY || 'secretKey', { expiresIn: '24h' })
        res.setHeader('tokenRefreshed', tokenRefreshed)

        const _user = await User.findByPk(decode.id)

        if (!_user) return res.status(404).json({ok: false, msg: 'user not found'}) 

        req.user = _user
        next()
        
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}