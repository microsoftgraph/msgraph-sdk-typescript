import { deserializeIntoAlertComment } from './deserializeIntoAlertComment';
import { type AlertComment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAlertCommentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlertComment;
}
