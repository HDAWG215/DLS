const RemainingGameLength = (firstTeamInterruptions, secondTeamInterruptions) => {
    let firstTeamInningsLength = 50;
    let secondTeamInningsLength = 50;
    let secondTeamLostBeforeStart = 0;
    let previousOvers = 50; 
    firstTeamInterruptions.forEach(element => { 
        firstTeamInningsLength = element.lengthAfter;
    });
    if (secondTeamInterruptions.length != 0) {
        secondTeamInterruptions.forEach(element => {      
            if (element.overs == 0) {
                secondTeamInningsLength = element.lengthAfter;
            } else {
                stLengthAfterInt = element.lengthAfter;
            }
        });
    } else {
        secondTeamInningsLength = firstTeamInningsLength;
        stLengthAfterInt = secondTeamInningsLength;
    }
    return [secondTeamInningsLength, stLengthAfterInt];
}

export default RemainingGameLength;