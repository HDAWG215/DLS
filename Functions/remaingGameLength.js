const RemainingGameLength = (secondTeamInterruptions) => {
    let secondTeamInningsLength = 50;
    let secondTeamLostBeforeStart = 0;
    let previousOvers = 50; 
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