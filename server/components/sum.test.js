const app = require('./sum')

test('sum of 1 and 2', ()=>{
    expect(app.sum(1,2)).toBe(3)
})