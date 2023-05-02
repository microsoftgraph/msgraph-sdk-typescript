import {deserializeIntoGetAttackSimulationSimulationUserCoverageResponse} from './deserializeIntoGetAttackSimulationSimulationUserCoverageResponse';
import {GetAttackSimulationSimulationUserCoverageResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAttackSimulationSimulationUserCoverageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAttackSimulationSimulationUserCoverageResponse;
}
