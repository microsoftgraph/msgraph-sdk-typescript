import {deserializeIntoAttackSimulationTrainingUserCoverage} from './deserializeIntoAttackSimulationTrainingUserCoverage';
import {AttackSimulationTrainingUserCoverage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttackSimulationTrainingUserCoverageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttackSimulationTrainingUserCoverage;
}
