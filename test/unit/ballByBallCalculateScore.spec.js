import CalculateScore from './../../Components/CalculcatorComponents/BallByBall/ballByBallScoreCalculator';
import ResourceLost from './../../Functions/ResourceCalculations/resourceLost';
import RemainingGameLength from './../../Functions/remaingGameLength';
import chai from 'chai';

describe('Calculating Score', () => {

    it('Can calculate correct score if there is a first innings interruption', () => {
        const ftResourceLost = 12.5;
        const calculatedScore = CalculateScore(
            50, // Initial Game Length
            ftResourceLost, // Lost due to interruption
            180, // First Team Total
            0, // Second Team Lost due to interruption
            40, // Second Team Innings Length,
            40, // Second Team Innings Legnth After Interruptions
            0, // Wickets Gone
            40); // Overs Gone At Stage
        chai.expect(calculatedScore).to.equal(184);
    });
    
    it('Can calculate correct score if second team are delayed', () => {
        const calculatedScore = CalculateScore(
            45, // Initial Game Length
            0, // Lost due to interruption
            212, // First Team Total
            0, // Second Team Lost due to interruption
            35, // Second Team Innings Length
            35, // Second Team Innings Legnth After Interruptions
            0, // Wickets Gone
            35); // Overs Gone At Stage
        chai.expect(calculatedScore).to.equal(184);
    });
    
    it('Can calculate correct score if second team are interrupted', () => {
        const calculatedScore = CalculateScore(
            50, // Initial Game Length
            0, // Lost due to interruption
            250, // First Team Total
            13.2, // Second Team Lost due to interruption
            50, // Second Team Innings Length Before Play
            40, // Second Team Remaing Length After Interruption
            1, // Wickets Gone
            40); // Overs Gone At Stage
        chai.expect(calculatedScore).to.equal(217);
    });
   
    it('Can calculate correct score if second team are interrupted more than once', () => {
        const calculatedScore = CalculateScore(
            50, // Initial Game Length
            0, // Lost due to interruption
            250, // First Team Total
            36.2, // Second Team Lost due to interruption
            50, // Second Team Innings Length Before Play
            30.2, // Second Team Remaing Length After Interruption
            3, // Wickets Gone
            30.2); // Overs Gone At Stage
        chai.expect(calculatedScore).to.equal(159);
    });
    
    it.only('Can calculate correct score if termination of T1s innings and delay to team 2', () => {
        const calculatedScore = CalculateScore(
            50, // Initial Game Length
            6.9, // Lost due to interruption
            226, // First Team Total
            0, // Second Team Lost due to interruption
            33, // Second Team Innings Length Before Play
            33, // Second Team Remaing Length After Interruption
            0, // Wickets Gone
            33); // Overs Gone At Stage
        chai.expect(calculatedScore).to.equal(193);
    });
    
    it.only('Can calculate correct score if termination of T1s innings with delay and interruption to team 2', () => {
        const calculatedScore = CalculateScore(
            50, // Initial Game Length
            6.9, // Lost due to interruption
            226, // First Team Total
            15.1, // Second Team Lost due to interruption
            33, // Second Team Innings Length Before Play
            28, // Second Team Remaing Length After Interruption
            0, // Wickets Gone
            28); // Overs Gone At Stage
        chai.expect(calculatedScore).to.equal(157);
    });

    // [{data: {}, expected: 42, msg: ""}].forEach(testCase => {
    //     it(testCase.msg, () => {
    //         const actual = CalculateScore(testCase.data);
    //         chai.expect(actual).to.equal(testCase.expected);
    //     })
    // });
});