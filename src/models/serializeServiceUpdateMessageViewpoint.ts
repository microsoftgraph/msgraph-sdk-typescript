import { type ServiceUpdateMessageViewpoint } from './serviceUpdateMessageViewpoint';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeServiceUpdateMessageViewpoint(writer: SerializationWriter, serviceUpdateMessageViewpoint: ServiceUpdateMessageViewpoint | undefined = {} as ServiceUpdateMessageViewpoint) : void {
        writer.writeBooleanValue("isArchived", serviceUpdateMessageViewpoint.isArchived);
        writer.writeBooleanValue("isFavorited", serviceUpdateMessageViewpoint.isFavorited);
        writer.writeBooleanValue("isRead", serviceUpdateMessageViewpoint.isRead);
        writer.writeStringValue("@odata.type", serviceUpdateMessageViewpoint.odataType);
        writer.writeAdditionalData(serviceUpdateMessageViewpoint.additionalData);
}
