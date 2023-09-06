import { deserializeIntoAlertTrigger } from './deserializeIntoAlertTrigger';
import { type AlertTrigger } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAlertTriggerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlertTrigger;
}
