import {GetAttackSimulationSimulationUserCoverageResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAttackSimulationSimulationUserCoverageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAttackSimulationSimulationUserCoverageResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAttackSimulationSimulationUserCoverageResponse();
}
