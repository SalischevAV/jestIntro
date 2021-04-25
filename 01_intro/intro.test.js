const {sum, nativeNull} = require('./intro');




describe('Sum function:', ()=>{
    test('should return sum of two values', ()=>{
        expect(sum(1,3)).toBe(4);
        expect(sum(1,4)).toEqual(5);
    });
    
    test('should return value correct compare with expectation', ()=>{
        expect(sum(9,4)).toBeGreaterThan(10);
        expect(sum(1,3)).toBeGreaterThanOrEqual(4);
        expect(sum(9,8)).toBeLessThan(100);
        expect(sum(9,8)).toBeLessThanOrEqual(17);
    })
    
    test(' must correct sum float values', ()=>{
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    })
})

describe('Null function:', ()=>{
    test('should return false value null', ()=>{
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).not.toBeUndefined();
    })
})

