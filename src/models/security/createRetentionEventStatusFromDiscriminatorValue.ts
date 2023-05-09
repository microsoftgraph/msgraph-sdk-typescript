import {deserializeIntoRetentionEventStatus} from './deserializeIntoRetentionEventStatus';
import {RetentionEventStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRetentionEventStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRetentionEventStatus;
}
