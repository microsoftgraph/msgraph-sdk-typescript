import {AttachmentSession} from './attachmentSession';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentSession(writer: SerializationWriter, attachmentSession: AttachmentSession | undefined = {} as AttachmentSession) : void {
        serializeEntity(writer, attachmentSession)
        writer.writeStringValue("content", attachmentSession.content);
        writer.writeDateValue("expirationDateTime", attachmentSession.expirationDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("nextExpectedRanges", attachmentSession.nextExpectedRanges);
}
