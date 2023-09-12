import { deserializeIntoReferenceAttachment } from './deserializeIntoReferenceAttachment';
import { type ReferenceAttachment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createReferenceAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReferenceAttachment;
}
