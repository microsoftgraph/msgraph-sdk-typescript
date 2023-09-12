import { type StringKeyStringValuePair } from './stringKeyStringValuePair';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStringKeyStringValuePair(writer: SerializationWriter, stringKeyStringValuePair: StringKeyStringValuePair | undefined = {} as StringKeyStringValuePair) : void {
        writer.writeStringValue("key", stringKeyStringValuePair.key);
        writer.writeStringValue("@odata.type", stringKeyStringValuePair.odataType);
        writer.writeStringValue("value", stringKeyStringValuePair.value);
        writer.writeAdditionalData(stringKeyStringValuePair.additionalData);
}
