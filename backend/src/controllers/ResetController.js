const Dev = require('../models/Dev')

module.exports = {
  async update(request, response) {
    const { user_id } = request.headers
    const loggedDev = await Dev.findById(user_id)

    loggedDev.likes = []
    loggedDev.dislikes = []

    loggedDev.save()

    // return response.json({ dev })
    return response.json({ message: 'User cleaned' })
  }
}