import { deserializeIntoAttachmentItem } from './deserializeIntoAttachmentItem';
import { type AttachmentItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttachmentItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttachmentItem;
}
