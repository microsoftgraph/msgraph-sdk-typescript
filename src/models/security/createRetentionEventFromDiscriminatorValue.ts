import { deserializeIntoRetentionEvent } from './deserializeIntoRetentionEvent';
import { type RetentionEvent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRetentionEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRetentionEvent;
}
