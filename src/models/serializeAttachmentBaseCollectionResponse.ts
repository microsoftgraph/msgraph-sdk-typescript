import {AttachmentBase} from './attachmentBase';
import {AttachmentBaseCollectionResponse} from './attachmentBaseCollectionResponse';
import {serializeAttachmentBase} from './serializeAttachmentBase';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentBaseCollectionResponse(attachmentBaseCollectionResponse: AttachmentBaseCollectionResponse | undefined = {} as AttachmentBaseCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attachmentBaseCollectionResponse)
        writer.writeCollectionOfObjectValues<AttachmentBase>("value", attachmentBaseCollectionResponse.value, serializeAttachmentBase);
}
