import {deserializeIntoGetAttackSimulationTrainingUserCoverageResponse} from './deserializeIntoGetAttackSimulationTrainingUserCoverageResponse';
import {GetAttackSimulationTrainingUserCoverageResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAttackSimulationTrainingUserCoverageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAttackSimulationTrainingUserCoverageResponse;
}
