import { deserializeIntoAttackSimulationRepeatOffender } from './deserializeIntoAttackSimulationRepeatOffender';
import { type AttackSimulationRepeatOffender } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttackSimulationRepeatOffenderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttackSimulationRepeatOffender;
}
