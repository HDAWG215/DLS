import CalculateScore from './../../Components/CalculcatorComponents/ballByBallScoreCalculator';
import chai from 'chai';

describe('Calculating Score', () => {

    it('Can calculate correct score', () => {
        const calculatedScore = CalculateScore(50, 240, 7, 22.2);
        chai.expect(calculatedScore).to.equal(188);
    });
    
    it('Can calculate correct score', () => {
        const calculatedScore = CalculateScore(44.4, 331, 2, 39.5);
        chai.expect(calculatedScore).to.equal(274);
    });
    
    it('Can calculate correct score', () => {
        const calculatedScore = CalculateScore(45, 450, 5, 33);
        chai.expect(calculatedScore).to.equal(311);
    });
    
    it('Can calculate correct score', () => {
        const calculatedScore = CalculateScore(20, 186, 0, 13.3);
        chai.expect(calculatedScore).to.equal(115);
    });
    
    it('Can calculate correct score', () => {
        const calculatedScore = CalculateScore(20, 186, 9, 13.3);
        chai.expect(calculatedScore).to.equal(171);
    });
    
    it('Can calculate correct score', () => {
        const calculatedScore = CalculateScore(30, 111, 4, 20.5);
        chai.expect(calculatedScore).to.equal(72);
    });
    
    it('Can calculate correct score', () => {
        const calculatedScore = CalculateScore(50, 240, 7, 0);
        chai.expect(calculatedScore).to.equal(188);
    });
    
    it('Can calculate correct score', () => {
        const calculatedScore = CalculateScore(45, 450, 2, 20.1);
        chai.expect(calculatedScore).to.equal(164);
    });
});