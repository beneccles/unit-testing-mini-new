import { add } from '../utils/functions';

it('add returns the sum of two numbers', () => {
    expect(add(1,2)).toBe(3)
})

// Take in '3' and '4', recieve a number
it('add returns the sum of two numbers', () => {
    expect(add('3','4')).toBe(7)
})

// take in two strings. check for Nan returned.
it('addreturns Nan if non numbers are passed', ()=> {
    expect(add('hello', 'world')).toBeNaN()
})

