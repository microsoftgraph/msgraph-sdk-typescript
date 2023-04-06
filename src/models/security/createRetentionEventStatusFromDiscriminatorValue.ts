import {RetentionEventStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRetentionEventStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : RetentionEventStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RetentionEventStatus();
}
