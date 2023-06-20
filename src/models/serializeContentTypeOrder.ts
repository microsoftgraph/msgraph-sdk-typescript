import {ContentTypeOrder} from './contentTypeOrder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentTypeOrder(contentTypeOrder: ContentTypeOrder | undefined = {} as ContentTypeOrder, writer: SerializationWriter) : void {
        writer.writeBooleanValue("default", contentTypeOrder.defaultEscaped);
        writer.writeStringValue("@odata.type", contentTypeOrder.odataType);
        writer.writeNumberValue("position", contentTypeOrder.position);
        writer.writeAdditionalData(contentTypeOrder.additionalData);
}
