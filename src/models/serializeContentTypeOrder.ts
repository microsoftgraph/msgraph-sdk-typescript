import { type ContentTypeOrder } from './contentTypeOrder';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeContentTypeOrder(writer: SerializationWriter, contentTypeOrder: ContentTypeOrder | undefined = {} as ContentTypeOrder) : void {
        writer.writeBooleanValue("default", contentTypeOrder.defaultEscaped);
        writer.writeStringValue("@odata.type", contentTypeOrder.odataType);
        writer.writeNumberValue("position", contentTypeOrder.position);
        writer.writeAdditionalData(contentTypeOrder.additionalData);
}
