import {AttachmentBase} from './attachmentBase';
import {AttachmentBaseCollectionResponse} from './attachmentBaseCollectionResponse';
import {createAttachmentBaseFromDiscriminatorValue} from './createAttachmentBaseFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAttachmentBase} from './serializeAttachmentBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentBaseCollectionResponse(attachmentBaseCollectionResponse: AttachmentBaseCollectionResponse | undefined = {} as AttachmentBaseCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attachmentBaseCollectionResponse),
        "value": n => { attachmentBaseCollectionResponse.value = n.getCollectionOfObjectValues<AttachmentBase>(createAttachmentBaseFromDiscriminatorValue); },
    }
}
