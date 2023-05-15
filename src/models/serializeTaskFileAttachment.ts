import {serializeAttachmentBase} from './serializeAttachmentBase';
import {TaskFileAttachment} from './taskFileAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskFileAttachment(writer: SerializationWriter, taskFileAttachment: TaskFileAttachment | undefined = {} as TaskFileAttachment) : void {
        serializeAttachmentBase(writer, taskFileAttachment)
        writer.writeStringValue("contentBytes", taskFileAttachment.contentBytes);
}
