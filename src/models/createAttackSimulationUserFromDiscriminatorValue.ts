import { deserializeIntoAttackSimulationUser } from './deserializeIntoAttackSimulationUser';
import { type AttackSimulationUser } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttackSimulationUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttackSimulationUser;
}
