import _ from 'lodash'

let config = {}

const showInConsole = () => {
  return _.get(config, 'console.show', false)
}

_.mixin({

  logConfig: (_config) => {
    config = _config
  },

  log: (type, name, ...args) => {
    if (showInConsole() && _.consoleLog) {
      _.consoleLog(type, name, ...args)
    }
  },

  logStart: (type, name, ...args) => {
    if (showInConsole() && _.consoleGroup) {
      _.consoleGroup(type, name, ...args)
    }
  },

  logEnd: () => {
    if (showInConsole() && _.consoleGroupEnd) {
      _.consoleGroupEnd()
    }
  },

  logError: (...args) => {
    if (showInConsole() && _.consoleError) {
      _.consoleError(...args)
    }
  },

  logWarning: (...args) => {
    if (showInConsole() && _.consoleWarning) {
      _.consoleWarning(...args)
    }
  }

})
