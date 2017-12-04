import CalculateScore from './../../Components/CalculcatorComponents/BallByBall/ballByBallScoreCalculator';
import ResourceLost from './../../Functions/ResourceCalculations/resourceLost';
import RemainingGameLength from './../../Functions/remaingGameLength';
import calculateScoreData from './../data/calculateScoreData';
import chai from 'chai';

describe.only('Calculating Score', () => {

    calculateScoreData.forEach(testCase => {
        it(testCase.msg, () => {
            const actual = CalculateScore(testCase.data);
            chai.expect(actual).to.equal(testCase.expected);
        })
    });
});