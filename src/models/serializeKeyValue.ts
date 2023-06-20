import {KeyValue} from './keyValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyValue(keyValue: KeyValue | undefined = {} as KeyValue, writer: SerializationWriter) : void {
        writer.writeStringValue("key", keyValue.key);
        writer.writeStringValue("@odata.type", keyValue.odataType);
        writer.writeStringValue("value", keyValue.value);
        writer.writeAdditionalData(keyValue.additionalData);
}
