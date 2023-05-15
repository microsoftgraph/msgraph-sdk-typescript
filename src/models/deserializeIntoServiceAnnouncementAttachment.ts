import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ServiceAnnouncementAttachment} from './serviceAnnouncementAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceAnnouncementAttachment(serviceAnnouncementAttachment: ServiceAnnouncementAttachment | undefined = {} as ServiceAnnouncementAttachment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(serviceAnnouncementAttachment),
        "content": n => { serviceAnnouncementAttachment.content = n.getStringValue(); },
        "contentType": n => { serviceAnnouncementAttachment.contentType = n.getStringValue(); },
        "lastModifiedDateTime": n => { serviceAnnouncementAttachment.lastModifiedDateTime = n.getDateValue(); },
        "name": n => { serviceAnnouncementAttachment.name = n.getStringValue(); },
        "size": n => { serviceAnnouncementAttachment.size = n.getNumberValue(); },
    }
}
