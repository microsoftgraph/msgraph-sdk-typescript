import { type Properties } from './properties';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeProperties(writer: SerializationWriter, properties: Properties | undefined = {} as Properties) : void {
        writer.writeStringValue("@odata.type", properties.odataType);
        writer.writeAdditionalData(properties.additionalData);
}
