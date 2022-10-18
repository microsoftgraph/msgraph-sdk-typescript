import {AttackSimulationTrainingUserCoverage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttackSimulationTrainingUserCoverageFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttackSimulationTrainingUserCoverage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttackSimulationTrainingUserCoverage();
}
