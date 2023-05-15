import {deserializeIntoAttackSimulationUser} from './deserializeIntoAttackSimulationUser';
import {AttackSimulationUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttackSimulationUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttackSimulationUser;
}
