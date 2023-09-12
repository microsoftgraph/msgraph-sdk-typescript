import { type StringKeyLongValuePair } from './stringKeyLongValuePair';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStringKeyLongValuePair(writer: SerializationWriter, stringKeyLongValuePair: StringKeyLongValuePair | undefined = {} as StringKeyLongValuePair) : void {
        writer.writeStringValue("key", stringKeyLongValuePair.key);
        writer.writeStringValue("@odata.type", stringKeyLongValuePair.odataType);
        writer.writeNumberValue("value", stringKeyLongValuePair.value);
        writer.writeAdditionalData(stringKeyLongValuePair.additionalData);
}
