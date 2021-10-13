const pool = require('./mysql.js')
const User = require('../model/user')

exports.findUserById = async ( id ) => {
    const res = await User.findOne({where: {id}})
    return res
}
  
exports.createUser = async (data) => {
    const res = await User.create(data)
    return res
}