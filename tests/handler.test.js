const { hello, sayHello } = require('../src/handler')

describe('hello', () => {
  it('should return an object contain message and event data', async () => {
    const event = {}
    const result = await hello(event)
    expect(result).toEqual({ message: sayHello(), event })
  })
})

describe('sayHello', () => {
  it('should return a nice message', () => {
    const message = sayHello()
    expect(message).toBe('Your function executed successfully!')
  })
})
