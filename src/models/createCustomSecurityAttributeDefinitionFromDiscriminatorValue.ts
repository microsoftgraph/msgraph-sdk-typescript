import { deserializeIntoCustomSecurityAttributeDefinition } from './deserializeIntoCustomSecurityAttributeDefinition';
import { type CustomSecurityAttributeDefinition } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomSecurityAttributeDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomSecurityAttributeDefinition;
}
