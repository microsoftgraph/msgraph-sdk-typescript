import { deserializeIntoItemAttachment } from './deserializeIntoItemAttachment';
import { type ItemAttachment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createItemAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemAttachment;
}
