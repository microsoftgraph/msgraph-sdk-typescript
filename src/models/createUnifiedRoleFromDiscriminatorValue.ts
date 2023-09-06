import { deserializeIntoUnifiedRole } from './deserializeIntoUnifiedRole';
import { type UnifiedRole } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRole;
}
