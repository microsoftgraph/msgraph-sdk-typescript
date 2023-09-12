import { deserializeIntoRetentionEventStatus } from './deserializeIntoRetentionEventStatus';
import { type RetentionEventStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRetentionEventStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRetentionEventStatus;
}
