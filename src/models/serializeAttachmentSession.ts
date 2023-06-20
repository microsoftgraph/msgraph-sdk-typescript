import {AttachmentSession} from './attachmentSession';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentSession(attachmentSession: AttachmentSession | undefined = {} as AttachmentSession, writer: SerializationWriter) : void {
        serializeEntity(writer, attachmentSession)
        writer.writeStringValue("content", attachmentSession.content);
        writer.writeDateValue("expirationDateTime", attachmentSession.expirationDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("nextExpectedRanges", attachmentSession.nextExpectedRanges);
}
