import { deserializeIntoEvent } from './deserializeIntoEvent';
import { type Event } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEvent;
}
