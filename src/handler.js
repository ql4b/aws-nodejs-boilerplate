'use strict'

const hello = async (event) => {
  return {
    message: sayHello(),
    event,
  }
}

const sayHello = () => {
  return 'Your function executed successfully!'
}

module.exports = { hello, sayHello }
