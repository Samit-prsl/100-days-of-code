const sum = require('./sum') //importing the exported sum.js file
test('Testing the shit', () => {
    expect(
        sum(1,2))
        .toBe(3)
})
