import chai from 'chai';
import OversPlusBalls from './../../OverOperators/oversPlusBalls';

describe('Overs Plus Balls', () => {
   
    it('should add balls to an over count that rolls over an extra over', () => {
        const plusBalls = OversPlusBalls(5.1, 6);
        chai.expect(plusBalls).to.equal(6.1);
    });
    
    it('should add balls to an over count that does not roll over an extra over', () => {
        const plusBalls = OversPlusBalls(22.4, 1);
        chai.expect(plusBalls).to.equal(22.5); 
    });
    
    it('should add large number of balls and not fail', () => {
        const plusBalls = OversPlusBalls(22.4, 605);
        chai.expect(plusBalls).to.equal(123.3); 
    });
})