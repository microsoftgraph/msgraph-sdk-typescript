import { type AttachmentSession } from './attachmentSession';
import { type AttachmentSessionCollectionResponse } from './attachmentSessionCollectionResponse';
import { serializeAttachmentSession } from './serializeAttachmentSession';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAttachmentSessionCollectionResponse(writer: SerializationWriter, attachmentSessionCollectionResponse: AttachmentSessionCollectionResponse | undefined = {} as AttachmentSessionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attachmentSessionCollectionResponse)
        writer.writeCollectionOfObjectValues<AttachmentSession>("value", attachmentSessionCollectionResponse.value, serializeAttachmentSession);
}
