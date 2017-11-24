import SubtractOvers from './../../Functions/OverOperators/subtraction';
import ResourceTable from './../../ResourceTables/ResourceTable';
import ResourceLost from './../../Functions/ResourceCalculations/resourceLost';

const calculateScore = (
    lengthOfGame, 
    fTLostByInterruption,
    firstTeamTotal, 
    sTLostByInterruption,
    sTInningsLength,
    secondTeamCurrentWicketsLost,
    oversGoneAtStage) => {        
               
        let revisedTotal;
        const G50 = 245;
        
        const firstTeamResourceLost = fTLostByInterruption;

        const firstTeamResourceUsed = ResourceTable[lengthOfGame][0] - firstTeamResourceLost;
        
        const secondTeamResourcesAvailable = ResourceTable[sTInningsLength][0] - sTLostByInterruption;  

        const secondTeamResourcesUsed = secondTeamResourcesAvailable - 
            ResourceTable[SubtractOvers(sTInningsLength, oversGoneAtStage).overs][secondTeamCurrentWicketsLost] 

        if ( firstTeamResourceUsed > secondTeamResourcesAvailable ) {
            revisedTotal = Math.floor((firstTeamTotal * (secondTeamResourcesUsed/firstTeamResourceUsed)))
        } else if ( firstTeamResourceUsed < secondTeamResourcesAvailable ) {
            revisedTotal = Math.floor((170 + ((secondTeamResourcesUsed - firstTeamResourceUsed) * G50)/100))
        } else if ( firstTeamResourceUsed == secondTeamResourcesAvailable ) {
            revisedTotal = Math.floor(firstTeamTotal)
        } else {
            revisedTotal = 'Error, please try again'
        }
        return revisedTotal;
}

export default calculateScore;