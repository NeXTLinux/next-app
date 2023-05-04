const { createNodeMiddleware, createProbot } = require('probot')

const app = require('../../../../')

module.exports = createNodeMiddleware(app, {
  probot: createProbot(),
  webhooksPath: '/src/api/github/webhooks'
})
