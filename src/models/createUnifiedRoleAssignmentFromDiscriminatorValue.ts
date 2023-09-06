import { deserializeIntoUnifiedRoleAssignment } from './deserializeIntoUnifiedRoleAssignment';
import { type UnifiedRoleAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnifiedRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnifiedRoleAssignment;
}
