import SubtractOvers from './../../../Functions/OverOperators/subtraction';
import ResourceTable from './../../../ResourceTables/ResourceTable';
import ResourceLost from './../../../Functions/ResourceCalculations/resourceLost';

const calculateScore = (data) => {        

    let revisedTotal;
    const G50 = 245;

    const firstTeamResourceUsed = ResourceTable[data.lengthOfGame][0] - data.fTLostByInterruption;
    
    const secondTeamResourcesAvailable = ResourceTable[data.sTInningsLength][0] - data.sTLostByInterruption

    const secondTeamResourcesUsed = secondTeamResourcesAvailable - 
        ResourceTable[SubtractOvers(data.sTLengthAfterInts, data.oversGoneAtStage).overs][data.secondTeamCurrentWicketsLost];

    if ( firstTeamResourceUsed >= secondTeamResourcesAvailable ) {
        revisedTotal = Math.floor((data.firstTeamTotal * (secondTeamResourcesUsed/firstTeamResourceUsed)))
    } else if ( firstTeamResourceUsed < secondTeamResourcesAvailable ) {
        revisedTotal = Math.floor((data.firstTeamTotal + ((secondTeamResourcesUsed - firstTeamResourceUsed) * G50)/100))
    } else {
        revisedTotal = 'Error, please try again'
    }
    return revisedTotal;
}

export default calculateScore;