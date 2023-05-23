import {StringKeyStringValuePair} from './stringKeyStringValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStringKeyStringValuePair(writer: SerializationWriter, stringKeyStringValuePair: StringKeyStringValuePair | undefined = {} as StringKeyStringValuePair) : void {
        writer.writeStringValue("key", stringKeyStringValuePair.key);
        writer.writeStringValue("@odata.type", stringKeyStringValuePair.odataType);
        writer.writeStringValue("value", stringKeyStringValuePair.value);
        writer.writeAdditionalData(stringKeyStringValuePair.additionalData);
}
