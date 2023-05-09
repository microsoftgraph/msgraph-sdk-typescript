import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServiceAnnouncementAttachment} from './serializeServiceAnnouncementAttachment';
import {ServiceAnnouncementAttachment} from './serviceAnnouncementAttachment';
import {ServiceAnnouncementAttachmentCollectionResponse} from './serviceAnnouncementAttachmentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceAnnouncementAttachmentCollectionResponse(writer: SerializationWriter, serviceAnnouncementAttachmentCollectionResponse: ServiceAnnouncementAttachmentCollectionResponse | undefined = {} as ServiceAnnouncementAttachmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, serviceAnnouncementAttachmentCollectionResponse)
        writer.writeCollectionOfObjectValues<ServiceAnnouncementAttachment>("value", serviceAnnouncementAttachmentCollectionResponse.value, serializeServiceAnnouncementAttachment);
}
