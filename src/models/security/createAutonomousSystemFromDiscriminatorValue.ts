import { deserializeIntoAutonomousSystem } from './deserializeIntoAutonomousSystem';
import { type AutonomousSystem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAutonomousSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAutonomousSystem;
}
