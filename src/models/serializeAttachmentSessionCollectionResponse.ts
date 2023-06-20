import {AttachmentSession} from './attachmentSession';
import {AttachmentSessionCollectionResponse} from './attachmentSessionCollectionResponse';
import {serializeAttachmentSession} from './serializeAttachmentSession';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentSessionCollectionResponse(attachmentSessionCollectionResponse: AttachmentSessionCollectionResponse | undefined = {} as AttachmentSessionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attachmentSessionCollectionResponse)
        writer.writeCollectionOfObjectValues<AttachmentSession>("value", attachmentSessionCollectionResponse.value, serializeAttachmentSession);
}
