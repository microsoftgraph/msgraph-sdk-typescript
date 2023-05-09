import {ItemBody} from './itemBody';
import {serializeItemBody} from './serializeItemBody';
import {serializeServiceAnnouncementAttachment} from './serializeServiceAnnouncementAttachment';
import {serializeServiceAnnouncementBase} from './serializeServiceAnnouncementBase';
import {serializeServiceUpdateMessageViewpoint} from './serializeServiceUpdateMessageViewpoint';
import {ServiceAnnouncementAttachment} from './serviceAnnouncementAttachment';
import {ServiceUpdateCategory} from './serviceUpdateCategory';
import {ServiceUpdateMessage} from './serviceUpdateMessage';
import {ServiceUpdateMessageViewpoint} from './serviceUpdateMessageViewpoint';
import {ServiceUpdateSeverity} from './serviceUpdateSeverity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceUpdateMessage(writer: SerializationWriter, serviceUpdateMessage: ServiceUpdateMessage | undefined = {} as ServiceUpdateMessage) : void {
        serializeServiceAnnouncementBase(writer, serviceUpdateMessage)
        writer.writeDateValue("actionRequiredByDateTime", serviceUpdateMessage.actionRequiredByDateTime);
        writer.writeCollectionOfObjectValues<ServiceAnnouncementAttachment>("attachments", serviceUpdateMessage.attachments, serializeServiceAnnouncementAttachment);
        writer.writeStringValue("attachmentsArchive", serviceUpdateMessage.attachmentsArchive);
        writer.writeObjectValue<ItemBody>("body", serviceUpdateMessage.body, serializeItemBody);
        writer.writeEnumValue<ServiceUpdateCategory>("category", serviceUpdateMessage.category);
        writer.writeBooleanValue("hasAttachments", serviceUpdateMessage.hasAttachments);
        writer.writeBooleanValue("isMajorChange", serviceUpdateMessage.isMajorChange);
        writer.writeCollectionOfPrimitiveValues<string>("services", serviceUpdateMessage.services);
        writer.writeEnumValue<ServiceUpdateSeverity>("severity", serviceUpdateMessage.severity);
        writer.writeCollectionOfPrimitiveValues<string>("tags", serviceUpdateMessage.tags);
        writer.writeObjectValue<ServiceUpdateMessageViewpoint>("viewPoint", serviceUpdateMessage.viewPoint, serializeServiceUpdateMessageViewpoint);
}
