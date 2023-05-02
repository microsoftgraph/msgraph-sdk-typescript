import {createServiceAnnouncementAttachmentFromDiscriminatorValue} from './createServiceAnnouncementAttachmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeServiceAnnouncementAttachment} from './serializeServiceAnnouncementAttachment';
import {ServiceAnnouncementAttachment} from './serviceAnnouncementAttachment';
import {ServiceAnnouncementAttachmentCollectionResponse} from './serviceAnnouncementAttachmentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceAnnouncementAttachmentCollectionResponse(serviceAnnouncementAttachmentCollectionResponse: ServiceAnnouncementAttachmentCollectionResponse | undefined = {} as ServiceAnnouncementAttachmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceAnnouncementAttachmentCollectionResponse),
        "value": n => { serviceAnnouncementAttachmentCollectionResponse.value = n.getCollectionOfObjectValues<ServiceAnnouncementAttachment>(createServiceAnnouncementAttachmentFromDiscriminatorValue); },
    }
}
