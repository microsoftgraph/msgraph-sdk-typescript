import { deserializeIntoAttributeDefinition } from './deserializeIntoAttributeDefinition';
import { type AttributeDefinition } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttributeDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeDefinition;
}
