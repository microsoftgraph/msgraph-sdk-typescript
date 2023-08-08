import type {Attachment} from './attachment';
import type {AttachmentCollectionResponse} from './attachmentCollectionResponse';
import {serializeAttachment} from './serializeAttachment';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentCollectionResponse(writer: SerializationWriter, attachmentCollectionResponse: AttachmentCollectionResponse | undefined = {} as AttachmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attachmentCollectionResponse)
        writer.writeCollectionOfObjectValues<Attachment>("value", attachmentCollectionResponse.value, serializeAttachment);
}
