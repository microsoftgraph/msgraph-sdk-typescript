import { deserializeIntoCustomSecurityAttributeValue } from './deserializeIntoCustomSecurityAttributeValue';
import { type CustomSecurityAttributeValue } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomSecurityAttributeValueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomSecurityAttributeValue;
}
