import { deserializeIntoGetAttackSimulationSimulationUserCoverageResponse } from './deserializeIntoGetAttackSimulationSimulationUserCoverageResponse';
import { type GetAttackSimulationSimulationUserCoverageResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetAttackSimulationSimulationUserCoverageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAttackSimulationSimulationUserCoverageResponse;
}
