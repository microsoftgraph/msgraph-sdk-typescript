import {GetAttackSimulationTrainingUserCoverageResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAttackSimulationTrainingUserCoverageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAttackSimulationTrainingUserCoverageResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAttackSimulationTrainingUserCoverageResponse();
}
