import SubtractOvers from './../../OverOperators/subtraction';
import ResourceTable from './../../ResourceTables/ResourceTable';

const calculateScore = (lengthOfGame, firstTeamTotal, secondTeamCurrentWicketsLost, oversGoneAtStage) => {        
    let revisedTotal;
    const G50 = 245;
    const firstTeamResources = ResourceTable[lengthOfGame][0];        
    const secondTeamOversLost = SubtractOvers(lengthOfGame, oversGoneAtStage).overs;
    const secondTeamResourceLost = ResourceTable[secondTeamOversLost][secondTeamCurrentWicketsLost];
    const secondTeamResourcesUsed = firstTeamResources - secondTeamResourceLost;
    if ( firstTeamResources > secondTeamResourcesUsed ) {
        revisedTotal = Math.floor((firstTeamTotal * (secondTeamResourcesUsed/firstTeamResources)) + 1)
    } else if ( secondTeamResourcesUsed < firstTeamResources ) {
        revisedTotal = Math.floor((firstTeamTotal + ((secondTeamResourcesUsed - firstTeamResources) * G50)/100)+ 1)
    } else if ( firstTeamResources == secondTeamResourcesUsed ) {
        revisedTotal = Math.floor(firstTeamTotal + 1)
    } else {
        revisedTotal = 'Error, please try again'
    }
    return revisedTotal;
}

export default calculateScore;