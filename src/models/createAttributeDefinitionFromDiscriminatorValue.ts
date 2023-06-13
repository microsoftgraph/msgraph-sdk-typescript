import {deserializeIntoAttributeDefinition} from './deserializeIntoAttributeDefinition';
import {AttributeDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeDefinition;
}
