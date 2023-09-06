import { deserializeIntoAttackSimulationRoot } from './deserializeIntoAttackSimulationRoot';
import { type AttackSimulationRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttackSimulationRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttackSimulationRoot;
}
