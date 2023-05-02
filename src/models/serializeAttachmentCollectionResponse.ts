import {Attachment} from './attachment';
import {AttachmentCollectionResponse} from './attachmentCollectionResponse';
import {serializeAttachment} from './serializeAttachment';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentCollectionResponse(writer: SerializationWriter, attachmentCollectionResponse: AttachmentCollectionResponse | undefined = {} as AttachmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attachmentCollectionResponse)
        writer.writeCollectionOfObjectValues<Attachment>("value", attachmentCollectionResponse.value, serializeAttachment);
}
