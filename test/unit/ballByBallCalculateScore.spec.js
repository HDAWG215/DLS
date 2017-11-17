import CalculateScore from './../../Components/CalculcatorComponents/ballByBallScoreCalculator';
import chai from 'chai';

describe('Calculating Score', () => {

    it('Can calculate correct score', () => {
        const calculatedScore = CalculateScore(50, 240, 7, 0);
        chai.expect(calculatedScore).to.equal(188);
    })
})