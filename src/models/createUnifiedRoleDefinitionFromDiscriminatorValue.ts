import {deserializeIntoUnifiedRoleDefinition} from './deserializeIntoUnifiedRoleDefinition';
import {UnifiedRoleDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleDefinition;
}
