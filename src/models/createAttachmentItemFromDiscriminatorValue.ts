import {deserializeIntoAttachmentItem} from './deserializeIntoAttachmentItem';
import {AttachmentItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttachmentItem;
}
