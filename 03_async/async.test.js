const Ajax = require('./async');
const axios = require('axios');

jest.mock('axios');

describe('Class Ajax.echo', ()=>{
    const enter = 'some data';
    test('should return value async', async ()=>{
        const res = await Ajax.echo(enter);
        expect(res).toBe(enter);
    });

    test('should return value with promise', ()=>{
        return Ajax.echo(enter).then(data =>expect(data).toBe(enter));
    });

    test('should catch error with promise', ()=>{
        return Ajax.echo().catch(data =>expect(data).toBeInstanceOf(Error));
    })

    test('should catch error with async', async ()=>{
        try{
            const res = await Ajax.echo();
        }
        catch(err){
            expect(err.message).toBe('error');
        }
    });
});

describe('class Ajax.get', ()=>{
    let response;
    let todos;

    beforeEach(()=>{
        todos =[{
            id:1, title: 'ToDo 1', complited: false
        }]

        response ={
            data: {todos},
        }
    })

    test('should return data from backend', ()=>{
        axios.get.mockReturnValue(response);

        return Ajax.get().then(data => expect(data.todos).toEqual(todos));
    });
});