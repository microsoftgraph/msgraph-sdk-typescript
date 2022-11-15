import {AttackSimulationSimulationUserCoverage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttackSimulationSimulationUserCoverageFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttackSimulationSimulationUserCoverage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttackSimulationSimulationUserCoverage();
}
