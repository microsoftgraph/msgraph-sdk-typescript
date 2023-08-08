import {serializeAttachmentBase} from './serializeAttachmentBase';
import type {TaskFileAttachment} from './taskFileAttachment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskFileAttachment(writer: SerializationWriter, taskFileAttachment: TaskFileAttachment | undefined = {} as TaskFileAttachment) : void {
        serializeAttachmentBase(writer, taskFileAttachment)
        writer.writeStringValue("contentBytes", taskFileAttachment.contentBytes);
}
