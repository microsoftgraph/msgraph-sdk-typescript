import {AttachmentSession} from './attachmentSession';
import {AttachmentSessionCollectionResponse} from './attachmentSessionCollectionResponse';
import {createAttachmentSessionFromDiscriminatorValue} from './createAttachmentSessionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAttachmentSession} from './serializeAttachmentSession';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentSessionCollectionResponse(attachmentSessionCollectionResponse: AttachmentSessionCollectionResponse | undefined = {} as AttachmentSessionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attachmentSessionCollectionResponse),
        "value": n => { attachmentSessionCollectionResponse.value = n.getCollectionOfObjectValues<AttachmentSession>(createAttachmentSessionFromDiscriminatorValue); },
    }
}
