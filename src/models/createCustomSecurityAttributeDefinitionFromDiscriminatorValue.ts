import {deserializeIntoCustomSecurityAttributeDefinition} from './deserializeIntoCustomSecurityAttributeDefinition';
import {CustomSecurityAttributeDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomSecurityAttributeDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomSecurityAttributeDefinition;
}
