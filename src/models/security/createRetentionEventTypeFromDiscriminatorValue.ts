import { deserializeIntoRetentionEventType } from './deserializeIntoRetentionEventType';
import { type RetentionEventType } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRetentionEventTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRetentionEventType;
}
