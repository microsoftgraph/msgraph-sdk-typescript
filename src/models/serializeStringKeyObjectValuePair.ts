import type {StringKeyObjectValuePair} from './stringKeyObjectValuePair';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStringKeyObjectValuePair(writer: SerializationWriter, stringKeyObjectValuePair: StringKeyObjectValuePair | undefined = {} as StringKeyObjectValuePair) : void {
        writer.writeStringValue("key", stringKeyObjectValuePair.key);
        writer.writeStringValue("@odata.type", stringKeyObjectValuePair.odataType);
        writer.writeAdditionalData(stringKeyObjectValuePair.additionalData);
}
