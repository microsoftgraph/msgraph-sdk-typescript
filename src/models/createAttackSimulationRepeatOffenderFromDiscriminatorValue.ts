import {AttackSimulationRepeatOffender} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttackSimulationRepeatOffenderFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttackSimulationRepeatOffender {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttackSimulationRepeatOffender();
}
