import {CustomSecurityAttributeDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomSecurityAttributeDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : CustomSecurityAttributeDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CustomSecurityAttributeDefinition();
}
