const sum = (a,b) => a+b;
const nativeNull = ()=> null;


function expect(value){
    return{
        tobe: exp =>{
            if (value === exp){
                console.log('success')
            } else {
                console.log(`expect ${exp} but ${value}`)
            }
        }
    }
}
module.exports ={
    sum,
    nativeNull,
}