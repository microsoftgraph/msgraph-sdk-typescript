import {deserializeIntoRetentionEvent} from './deserializeIntoRetentionEvent';
import {RetentionEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRetentionEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRetentionEvent;
}
