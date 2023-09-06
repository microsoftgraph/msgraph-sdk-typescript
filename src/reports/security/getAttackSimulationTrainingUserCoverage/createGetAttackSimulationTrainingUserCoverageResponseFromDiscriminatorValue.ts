import { deserializeIntoGetAttackSimulationTrainingUserCoverageResponse } from './deserializeIntoGetAttackSimulationTrainingUserCoverageResponse';
import { type GetAttackSimulationTrainingUserCoverageResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetAttackSimulationTrainingUserCoverageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAttackSimulationTrainingUserCoverageResponse;
}
