const cloneArray = require('./CloneArray');
test('Testing it again', () => { 
    const arr = [1,2,3]
   expect(cloneArray(arr)).toEqual(arr)
})
