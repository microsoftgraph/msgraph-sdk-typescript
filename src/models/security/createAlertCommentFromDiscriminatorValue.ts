import {deserializeIntoAlertComment} from './deserializeIntoAlertComment';
import {AlertComment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertCommentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlertComment;
}
