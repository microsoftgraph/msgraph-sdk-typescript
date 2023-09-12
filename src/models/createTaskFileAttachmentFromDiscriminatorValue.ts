import { deserializeIntoTaskFileAttachment } from './deserializeIntoTaskFileAttachment';
import { type TaskFileAttachment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTaskFileAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskFileAttachment;
}
