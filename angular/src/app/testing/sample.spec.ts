import {factorial} from './sample';


/* fdescribe('Sample Testing',()=>{ //se le coloca F al describe para que se ejecute solo ese(focus)
    it('1 es 1', ()=>{
        expect(1===1).toBeTruthy();
    })
    it('1 no es 2', ()=>{
        expect(1===2).toBeFalsy();
    })
}); */


// Test Development Drive (TDD)

describe('Factorial Testing',()=>{
    it('factorial de 5 deberia ser 120', ()=>{
        expect(factorial(5)).toEqual(120);
    })
    it('factorial de 1 deberia ser 1', ()=>{
        expect(factorial(1)).toEqual(1);
    })
    it('deberia ser undefined el factorial de 0', ()=>{
        expect(factorial(0)).toBeUndefined()
    })
    it('deberia ser undefined el factorial de numeros negativos', ()=>{
        expect(factorial(-1)).toBeUndefined()
    })
});