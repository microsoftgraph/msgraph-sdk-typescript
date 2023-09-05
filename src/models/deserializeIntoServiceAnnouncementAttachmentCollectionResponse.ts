import { createServiceAnnouncementAttachmentFromDiscriminatorValue } from './createServiceAnnouncementAttachmentFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeServiceAnnouncementAttachment } from './serializeServiceAnnouncementAttachment';
import { type ServiceAnnouncementAttachment } from './serviceAnnouncementAttachment';
import { type ServiceAnnouncementAttachmentCollectionResponse } from './serviceAnnouncementAttachmentCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceAnnouncementAttachmentCollectionResponse(serviceAnnouncementAttachmentCollectionResponse: ServiceAnnouncementAttachmentCollectionResponse | undefined = {} as ServiceAnnouncementAttachmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceAnnouncementAttachmentCollectionResponse),
        "value": n => { serviceAnnouncementAttachmentCollectionResponse.value = n.getCollectionOfObjectValues<ServiceAnnouncementAttachment>(createServiceAnnouncementAttachmentFromDiscriminatorValue); },
    }
}
