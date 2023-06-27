import {deserializeIntoTimeBasedAttributeTrigger} from './deserializeIntoTimeBasedAttributeTrigger';
import {TimeBasedAttributeTrigger} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeBasedAttributeTriggerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeBasedAttributeTrigger;
}
