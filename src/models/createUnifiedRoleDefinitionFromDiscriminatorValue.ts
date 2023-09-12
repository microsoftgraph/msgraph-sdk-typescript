import { deserializeIntoUnifiedRoleDefinition } from './deserializeIntoUnifiedRoleDefinition';
import { type UnifiedRoleDefinition } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleDefinition;
}
