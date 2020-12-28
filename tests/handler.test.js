const { sayHello } = require('../src/handler')

describe('sayHello', () => {
  it('should return a nice message', () => {
    const message = sayHello()
    expect(message).toBe('Your function executed successfully!')
  })
})
