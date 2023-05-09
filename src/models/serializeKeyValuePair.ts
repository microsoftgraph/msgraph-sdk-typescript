import {KeyValuePair} from './keyValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyValuePair(writer: SerializationWriter, keyValuePair: KeyValuePair | undefined = {} as KeyValuePair) : void {
        writer.writeStringValue("name", keyValuePair.name);
        writer.writeStringValue("@odata.type", keyValuePair.odataType);
        writer.writeStringValue("value", keyValuePair.value);
        writer.writeAdditionalData(keyValuePair.additionalData);
}
