import type {AttachmentBase} from './attachmentBase';
import type {AttachmentBaseCollectionResponse} from './attachmentBaseCollectionResponse';
import {serializeAttachmentBase} from './serializeAttachmentBase';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttachmentBaseCollectionResponse(writer: SerializationWriter, attachmentBaseCollectionResponse: AttachmentBaseCollectionResponse | undefined = {} as AttachmentBaseCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attachmentBaseCollectionResponse)
        writer.writeCollectionOfObjectValues<AttachmentBase>("value", attachmentBaseCollectionResponse.value, serializeAttachmentBase);
}
