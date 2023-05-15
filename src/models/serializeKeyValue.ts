import {KeyValue} from './keyValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyValue(writer: SerializationWriter, keyValue: KeyValue | undefined = {} as KeyValue) : void {
        writer.writeStringValue("key", keyValue.key);
        writer.writeStringValue("@odata.type", keyValue.odataType);
        writer.writeStringValue("value", keyValue.value);
        writer.writeAdditionalData(keyValue.additionalData);
}
