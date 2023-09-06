import { type CustomSecurityAttributeValue } from './customSecurityAttributeValue';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomSecurityAttributeValue(customSecurityAttributeValue: CustomSecurityAttributeValue | undefined = {} as CustomSecurityAttributeValue) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { customSecurityAttributeValue.odataType = n.getStringValue(); },
    }
}
