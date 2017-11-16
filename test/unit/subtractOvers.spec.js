import renderer from 'react-test-renderer';
import chai from 'chai';
import SubtractOvers from './../../OverOperators/subtraction';

describe('Subtract Overs', () => {
    it('should subtract 2 overs that don\'t roll over an extra overs', () => {
        const subtraction = SubtractOvers(22.5, 5.1);
        chai.expect(subtraction).to.equal(17.4);
    })

})