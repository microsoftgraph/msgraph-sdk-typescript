import {deserializeIntoCustomSecurityAttributeValue} from './deserializeIntoCustomSecurityAttributeValue';
import {CustomSecurityAttributeValue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomSecurityAttributeValueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomSecurityAttributeValue;
}
