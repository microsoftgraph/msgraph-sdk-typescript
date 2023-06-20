import {FileAttachment} from './fileAttachment';
import {serializeAttachment} from './serializeAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileAttachment(fileAttachment: FileAttachment | undefined = {} as FileAttachment, writer: SerializationWriter) : void {
        serializeAttachment(writer, fileAttachment)
        writer.writeStringValue("contentBytes", fileAttachment.contentBytes);
        writer.writeStringValue("contentId", fileAttachment.contentId);
        writer.writeStringValue("contentLocation", fileAttachment.contentLocation);
}
