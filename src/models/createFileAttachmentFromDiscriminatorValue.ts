import { deserializeIntoFileAttachment } from './deserializeIntoFileAttachment';
import { type FileAttachment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFileAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileAttachment;
}
