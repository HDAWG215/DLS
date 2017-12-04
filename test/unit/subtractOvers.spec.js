import chai from 'chai';
import SubtractOvers from './../../Functions/OverOperators/subtraction';

describe('Subtract Overs', () => {
   
    it('should subtract 2 overs that don\'t roll over an extra overs', () => {
        const subtraction = SubtractOvers(22.5, 5.1);
        chai.expect(subtraction.overs).to.equal(17.4);
        chai.expect(subtraction.totalBalls).to.equal(106);
    });
    
    it('should subtract 2 overs that roll over an extra overs', () => {
        const subtraction = SubtractOvers(22.2, 11.5);
        chai.expect(subtraction.overs).to.equal(10.3);
        chai.expect(subtraction.totalBalls).to.equal(63);
    });
})