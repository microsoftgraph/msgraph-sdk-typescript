import type {CustomSecurityAttributeValue} from './customSecurityAttributeValue';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomSecurityAttributeValue(writer: SerializationWriter, customSecurityAttributeValue: CustomSecurityAttributeValue | undefined = {} as CustomSecurityAttributeValue) : void {
        writer.writeStringValue("@odata.type", customSecurityAttributeValue.odataType);
        writer.writeAdditionalData(customSecurityAttributeValue.additionalData);
}
