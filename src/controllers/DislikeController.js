const Dev = require('../models/Dev')

module.exports = {
  async store(request, response) {
    const { user_id } = request.headers
    const { devId } = request.params
    console.log(user_id)

    const loggedDev = await Dev.findById(user_id)
    console.log(loggedDev)
    const targetDev = await Dev.findById(devId)
    console.log(targetDev)
    if (!targetDev) {
      return response.status(400).json({ error: 'Dev not exists'})
    }

    loggedDev.dislikes.push(targetDev._id)

    await loggedDev.save()

    return response.json(loggedDev)
  }
}