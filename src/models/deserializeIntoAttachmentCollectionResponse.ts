import { type Attachment } from './attachment';
import { type AttachmentCollectionResponse } from './attachmentCollectionResponse';
import { createAttachmentFromDiscriminatorValue } from './createAttachmentFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAttachment } from './serializeAttachment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentCollectionResponse(attachmentCollectionResponse: AttachmentCollectionResponse | undefined = {} as AttachmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attachmentCollectionResponse),
        "value": n => { attachmentCollectionResponse.value = n.getCollectionOfObjectValues<Attachment>(createAttachmentFromDiscriminatorValue); },
    }
}
