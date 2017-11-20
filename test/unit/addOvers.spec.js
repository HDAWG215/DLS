import chai from 'chai';
import AddOvers from './../../OverOperators/addition';

describe('Add Overs', () => {
   
    it('should add 2 overs that do not roll over an extra overs', () => {
        const addition = AddOvers(5.1, 5.1);
        chai.expect(addition).to.equal(10.2);
    });
    
    it('should add 2 overs that roll over an extra overs', () => {
        const addition = AddOvers(22.4, 11.5);
        chai.expect(addition).to.equal(34.3); 
    });
})