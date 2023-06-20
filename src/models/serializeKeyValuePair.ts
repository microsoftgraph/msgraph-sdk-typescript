import {KeyValuePair} from './keyValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyValuePair(keyValuePair: KeyValuePair | undefined = {} as KeyValuePair, writer: SerializationWriter) : void {
        writer.writeStringValue("name", keyValuePair.name);
        writer.writeStringValue("@odata.type", keyValuePair.odataType);
        writer.writeStringValue("value", keyValuePair.value);
        writer.writeAdditionalData(keyValuePair.additionalData);
}
