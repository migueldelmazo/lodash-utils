import _ from 'lodash'

let config = {}

const getStyles = (type) => {
  return config && config.styles ? config.styles[type] : ''
}

_.mixin({

  consoleConfig: (_config) => {
    config = _config
  },

  consoleGroup: (type, name, ...args) => {
    const styles = getStyles(type)
    if (styles) {
      console.group('%c' + name, getStyles(type), ..._.cloneDeep(args))
    } else {
      console.group(type + ':', name, ..._.cloneDeep(args))
    }
  },

  consoleGroupEnd: () => {
    console.groupEnd()
  },

  consoleLog: (type, name, ...args) => {
    const styles = getStyles(type)
    if (styles) {
      console.log('%c' + name, getStyles(type), ..._.cloneDeep(args))
    } else {
      console.log(type + ':', name, getStyles(type), ..._.cloneDeep(args))
    }
  },

  consoleError: (...args) => {
    console.error(...args)
  },

  consoleWarning: (...args) => {
    console.warn(...args)
  }

})
