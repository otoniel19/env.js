var env = {}
require('./utils')

require('fs').readFileSync(require('path').resolve('.env'),'utf-8').split(/\r?\n/).forEach(name => {
  const data = name.split("=")
  if(data[1].isNumber()) env[data[0]] = Number(data[1])
  else env[data[0]] = String(data[1])
})

const envJSON = JSON.parse(JSON.stringify(env))

Object.keys(envJSON).forEach(name => process.env[name] = envJSON[name])

module.exports = envJSON