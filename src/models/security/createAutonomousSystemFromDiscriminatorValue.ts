import {deserializeIntoAutonomousSystem} from './deserializeIntoAutonomousSystem';
import {AutonomousSystem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAutonomousSystemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAutonomousSystem;
}
