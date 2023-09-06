import { deserializeIntoAttackSimulationTrainingUserCoverage } from './deserializeIntoAttackSimulationTrainingUserCoverage';
import { type AttackSimulationTrainingUserCoverage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttackSimulationTrainingUserCoverageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttackSimulationTrainingUserCoverage;
}
