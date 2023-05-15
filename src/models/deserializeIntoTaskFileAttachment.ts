import {deserializeIntoAttachmentBase} from './deserializeIntoAttachmentBase';
import {TaskFileAttachment} from './taskFileAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskFileAttachment(taskFileAttachment: TaskFileAttachment | undefined = {} as TaskFileAttachment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachmentBase(taskFileAttachment),
        "contentBytes": n => { taskFileAttachment.contentBytes = n.getStringValue(); },
    }
}
