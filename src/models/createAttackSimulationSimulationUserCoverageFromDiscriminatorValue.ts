import { deserializeIntoAttackSimulationSimulationUserCoverage } from './deserializeIntoAttackSimulationSimulationUserCoverage';
import { type AttackSimulationSimulationUserCoverage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttackSimulationSimulationUserCoverageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttackSimulationSimulationUserCoverage;
}
