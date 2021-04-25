const _ = require('./sync');

describe('_ compact:', () => {

    let arr;
    let resArr;

    beforeEach(()=>{
        arr = [false, 42, 0, '', true, null, 'hello']
    })

    beforeAll(()=>{
        resArr = [42, true, 'hello'];
    })

    test('must be defined', () => {
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    }); 

    test('must remove falsy values from array', () => {

        expect(_.compact(arr)).toEqual(resArr);
    });

    test('should not contain falsy values', () => {
        expect(_.compact(arr)).not.toContain(false);
        expect(_.compact(arr)).not.toContain(0);
        expect(_.compact(arr)).not.toContain('');
        expect(_.compact(arr)).not.toContain(null);       
    });
});

describe('_ groupBy', ()=>{

    test('must be defined', () => {
        expect(_.groupBy).toBeDefined();
        expect(_.groupBy).not.toBeUndefined();
    });

    test('sould group array item by Math.floor', ()=>{
        const arr = [2.2, 2.4, 4.2, 3.1];
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3:[3.1],
        }
        expect(_.groupBy(arr, Math.floor)).toEqual(result);
    });

    test('sould group array item by length', ()=>{
        const arr = ['one', 'two', 'three'];
        const result = {
            3: ['one', 'two'],
            5: ['three']
        }
        expect(_.groupBy(arr, 'length')).toEqual(result);
    });

    test('shouldnt return array', ()=>{
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
    });
})