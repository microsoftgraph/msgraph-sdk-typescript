import { type KeyValuePair } from './keyValuePair';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeKeyValuePair(writer: SerializationWriter, keyValuePair: KeyValuePair | undefined = {} as KeyValuePair) : void {
        writer.writeStringValue("name", keyValuePair.name);
        writer.writeStringValue("@odata.type", keyValuePair.odataType);
        writer.writeStringValue("value", keyValuePair.value);
        writer.writeAdditionalData(keyValuePair.additionalData);
}
