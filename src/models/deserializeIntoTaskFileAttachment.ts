import { deserializeIntoAttachmentBase } from './deserializeIntoAttachmentBase';
import { type TaskFileAttachment } from './taskFileAttachment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskFileAttachment(taskFileAttachment: TaskFileAttachment | undefined = {} as TaskFileAttachment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachmentBase(taskFileAttachment),
        "contentBytes": n => { taskFileAttachment.contentBytes = n.getStringValue(); },
    }
}
