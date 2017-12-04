import ResourceTable from './../../ResourceTables/ResourceTable';
import SubtractOvers from './../OverOperators/subtraction';

const ResourceLost = (inningsLength, interruptionsArray) => {
    let lostResource = 0;
    let previousGameLength = inningsLength;
    interruptionsArray.forEach(element => {
        if (element.overs == 0) {
            lostResource += 0;
        } else {
            const timeLeftAtInterruption = SubtractOvers(previousGameLength, element.overs).overs;
            const timeLeftAfterInterruption = SubtractOvers(element.lengthAfter, element.overs).overs; 
    
            const resourceRemainingAtInterruption = ResourceTable[timeLeftAtInterruption][element.wickets];
            const resourceRemainingAfterInterruption = ResourceTable[timeLeftAfterInterruption][element.wickets]; 
            const resourceLost = Math.round((resourceRemainingAtInterruption - resourceRemainingAfterInterruption) * 10) / 10;
    
            lostResource += resourceLost;          
        }       
        previousGameLength = element.lengthAfter;
    });
    return lostResource;
}

export default ResourceLost;