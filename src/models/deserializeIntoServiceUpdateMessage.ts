import { createItemBodyFromDiscriminatorValue } from './createItemBodyFromDiscriminatorValue';
import { createServiceAnnouncementAttachmentFromDiscriminatorValue } from './createServiceAnnouncementAttachmentFromDiscriminatorValue';
import { createServiceUpdateMessageViewpointFromDiscriminatorValue } from './createServiceUpdateMessageViewpointFromDiscriminatorValue';
import { deserializeIntoServiceAnnouncementBase } from './deserializeIntoServiceAnnouncementBase';
import { type ItemBody } from './itemBody';
import { serializeItemBody } from './serializeItemBody';
import { serializeServiceAnnouncementAttachment } from './serializeServiceAnnouncementAttachment';
import { serializeServiceUpdateMessageViewpoint } from './serializeServiceUpdateMessageViewpoint';
import { type ServiceAnnouncementAttachment } from './serviceAnnouncementAttachment';
import { ServiceUpdateCategory } from './serviceUpdateCategory';
import { type ServiceUpdateMessage } from './serviceUpdateMessage';
import { type ServiceUpdateMessageViewpoint } from './serviceUpdateMessageViewpoint';
import { ServiceUpdateSeverity } from './serviceUpdateSeverity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceUpdateMessage(serviceUpdateMessage: ServiceUpdateMessage | undefined = {} as ServiceUpdateMessage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoServiceAnnouncementBase(serviceUpdateMessage),
        "actionRequiredByDateTime": n => { serviceUpdateMessage.actionRequiredByDateTime = n.getDateValue(); },
        "attachments": n => { serviceUpdateMessage.attachments = n.getCollectionOfObjectValues<ServiceAnnouncementAttachment>(createServiceAnnouncementAttachmentFromDiscriminatorValue); },
        "attachmentsArchive": n => { serviceUpdateMessage.attachmentsArchive = n.getStringValue(); },
        "body": n => { serviceUpdateMessage.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "category": n => { serviceUpdateMessage.category = n.getEnumValue<ServiceUpdateCategory>(ServiceUpdateCategory); },
        "hasAttachments": n => { serviceUpdateMessage.hasAttachments = n.getBooleanValue(); },
        "isMajorChange": n => { serviceUpdateMessage.isMajorChange = n.getBooleanValue(); },
        "services": n => { serviceUpdateMessage.services = n.getCollectionOfPrimitiveValues<string>(); },
        "severity": n => { serviceUpdateMessage.severity = n.getEnumValue<ServiceUpdateSeverity>(ServiceUpdateSeverity); },
        "tags": n => { serviceUpdateMessage.tags = n.getCollectionOfPrimitiveValues<string>(); },
        "viewPoint": n => { serviceUpdateMessage.viewPoint = n.getObjectValue<ServiceUpdateMessageViewpoint>(createServiceUpdateMessageViewpointFromDiscriminatorValue); },
    }
}
