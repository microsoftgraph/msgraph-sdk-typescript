import {FileAttachment} from './fileAttachment';
import {serializeAttachment} from './serializeAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileAttachment(writer: SerializationWriter, fileAttachment: FileAttachment | undefined = {} as FileAttachment) : void {
        serializeAttachment(writer, fileAttachment)
        writer.writeStringValue("contentBytes", fileAttachment.contentBytes);
        writer.writeStringValue("contentId", fileAttachment.contentId);
        writer.writeStringValue("contentLocation", fileAttachment.contentLocation);
}
