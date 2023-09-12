import { deserializeIntoAppRoleAssignment } from './deserializeIntoAppRoleAssignment';
import { type AppRoleAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppRoleAssignment;
}
