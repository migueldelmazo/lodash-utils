import _ from 'lodash'

_.mixin({

  listenWindowError: () {
    window.onerror = (message, file, line, column, error) => {
      if (_.logError) {
        _.logError(
          'unhandled-error',
          message,
          file,
          line,
          column,
          error.message,
          _.replace(error.stack, /\n/g, '')
        )
      }
    }

  }

})
