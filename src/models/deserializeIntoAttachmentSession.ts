import { type AttachmentSession } from './attachmentSession';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentSession(attachmentSession: AttachmentSession | undefined = {} as AttachmentSession) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attachmentSession),
        "content": n => { attachmentSession.content = n.getStringValue(); },
        "expirationDateTime": n => { attachmentSession.expirationDateTime = n.getDateValue(); },
        "nextExpectedRanges": n => { attachmentSession.nextExpectedRanges = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
