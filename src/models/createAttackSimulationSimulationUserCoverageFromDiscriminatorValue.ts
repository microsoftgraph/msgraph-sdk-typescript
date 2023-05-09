import {deserializeIntoAttackSimulationSimulationUserCoverage} from './deserializeIntoAttackSimulationSimulationUserCoverage';
import {AttackSimulationSimulationUserCoverage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttackSimulationSimulationUserCoverageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttackSimulationSimulationUserCoverage;
}
