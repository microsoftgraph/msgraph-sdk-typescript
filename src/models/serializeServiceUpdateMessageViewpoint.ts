import {ServiceUpdateMessageViewpoint} from './serviceUpdateMessageViewpoint';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceUpdateMessageViewpoint(writer: SerializationWriter, serviceUpdateMessageViewpoint: ServiceUpdateMessageViewpoint | undefined = {} as ServiceUpdateMessageViewpoint) : void {
        writer.writeBooleanValue("isArchived", serviceUpdateMessageViewpoint.isArchived);
        writer.writeBooleanValue("isFavorited", serviceUpdateMessageViewpoint.isFavorited);
        writer.writeBooleanValue("isRead", serviceUpdateMessageViewpoint.isRead);
        writer.writeStringValue("@odata.type", serviceUpdateMessageViewpoint.odataType);
        writer.writeAdditionalData(serviceUpdateMessageViewpoint.additionalData);
}
